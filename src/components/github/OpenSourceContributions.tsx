import React, { useState, useEffect } from 'react';

interface PullRequest {
  title: string;
  html_url: string;
  repository_url: string;
  pull_request: {
    merged_at: string;
  };
}

const OpenSourceContributions: React.FC = () => {
  const [contributions, setContributions] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_USERNAME = 'rishvant';
  const TARGET_ORGANIZATIONS = ['asyncapi'];

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const orgQueryPart = TARGET_ORGANIZATIONS.map(org => `org:${org}`).join('+');
        const apiUrl = `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+is:pr+is:merged+is:public+${orgQueryPart}&sort=updated&order=desc&per_page=12`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setContributions(data.items || []);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch contributions:", err);
        setError("Could not fetch contributions. The GitHub API might be unavailable or the rate limit was exceeded.");
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRepoOwnerAndName = (repoUrl: string) => {
    const parts = repoUrl.split('/');
    return {
      owner: parts[parts.length - 2],
      name: parts[parts.length - 1]
    };
  };

  if (loading) {
    return (
      <div className="col-span-full flex justify-center items-center py-16">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-full text-center text-red-500 font-semibold bg-red-100 dark:bg-red-900/20 dark:text-red-400 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  if (!contributions || contributions.length === 0) {
    return (
      <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-8">
        No public merged pull requests found for {GITHUB_USERNAME} in the specified organizations.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {contributions.map((pr) => {
        const { owner, name } = getRepoOwnerAndName(pr.repository_url);
        const fullRepoName = `${owner}/${name}`;
        const ownerAvatarUrl = `https://github.com/${owner}.png`;

        return (
          <div key={pr.html_url} className="bg-white dark:bg-gray-800/60 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
            <div className="flex items-center mb-4">
              <img 
                src={ownerAvatarUrl} 
                alt={`${owner} logo`} 
                className="w-8 h-8 mr-3 rounded-full"
                loading="lazy"
              />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate" title={fullRepoName}>
                {fullRepoName}
              </h3>
            </div>
            <p className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-3 flex-grow">
              {pr.title}
            </p>
            <div className="flex justify-between items-center mt-auto pt-4">
              <a 
                href={pr.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
              >
                View PR
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {formatDate(pr.pull_request.merged_at)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OpenSourceContributions;
