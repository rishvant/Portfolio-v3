import { useState, useEffect, useCallback, useMemo } from 'react';

// API Endpoint
const API_URL = 'https://github-contributions-api.jogruber.de/v4/';

const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 2010; year--) {
        years.push(year);
    }
    return years;
};

const Loader = () => (
    <div className="flex justify-center items-center py-10">
        <div className="w-9 h-9 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
    <div className="text-center text-red-500 font-semibold bg-red-100 p-4 rounded-lg">
        {message}
    </div>
);

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface HeatmapData {
    contributions: ContributionDay[];
    total: {
        [year: string]: number;
    };
}

const HeatmapGrid = ({ contributions }: { contributions: ContributionDay[] }) => {
    if (!contributions || contributions.length === 0) {
        return null;
    }

    const colorLevelMapping = {
        0: 'bg-gray-200 dark:bg-gray-700',
        1: 'bg-green-200 dark:bg-green-900',
        2: 'bg-green-400 dark:bg-green-700',
        3: 'bg-green-600 dark:bg-green-600',
        4: 'bg-green-800 dark:bg-green-500',
    };

    const startDate = new Date(contributions[0].date);
    const dayOfWeek = (startDate.getDay() + 6) % 7; // Monday as first day

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let lastMonth = -1;
    const monthLabels: JSX.Element[] = [];

    contributions.forEach((day, index) => {
        const date = new Date(day.date);
        const month = date.getMonth();
        if (index === 0 || (date.getDate() === 1 && month !== lastMonth)) {
            const weekIndex = Math.floor((index + dayOfWeek) / 7);
            monthLabels.push(
                <div key={`${date.getFullYear()}-${month}`} className="absolute" style={{ left: `${weekIndex * 20}px` }}>
                    {monthNames[month]}
                </div>
            );
            lastMonth = month;
        }
    });

    return (
        <div>
            <style>{`
                .tooltip-arrow::after {
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: #24292e transparent transparent transparent;
                }
                @media (prefers-color-scheme: dark) {
                    .tooltip-arrow::after {
                        border-color: #1f2937 transparent transparent transparent;
                    }
                }
            `}</style>
            <div className="relative h-6 text-xs text-gray-500 mb-2" style={{ marginLeft: '32px' }}>
                {monthLabels}
            </div>
            <div className="flex gap-3">
                <div className="grid grid-rows-7 gap-y-[4px] text-xs text-gray-500 pr-2">
                    <div className="h-4"></div>
                    <div className="h-4">Mon</div>
                    <div className="h-4"></div>
                    <div className="h-4">Wed</div>
                    <div className="h-4"></div>
                    <div className="h-4">Fri</div>
                    <div className="h-4"></div>
                </div>
                <div className="grid grid-cols-[repeat(53,16px)] grid-rows-[repeat(7,16px)] grid-flow-col gap-1">
                    {[...Array(dayOfWeek)].map((_, i) => <div key={`spacer-${i}`}></div>)}
                    {contributions.map((day) => (
                        <div key={day.date} className="relative group">
                            <div className={`w-4 h-4 rounded-[3px] ${colorLevelMapping[day.level as keyof typeof colorLevelMapping]}`}></div>
                            <span className="tooltip-arrow invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 z-10 p-2 text-xs font-semibold text-white bg-gray-800 dark:bg-gray-700 rounded-md whitespace-nowrap pointer-events-none">
                                {day.count} contributions on {new Date(day.date).toDateString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Heatmap = ({ data }: { data: HeatmapData }) => {
    if (!data) return null;

    const total = data.total?.lastYear || 0;
    const colorLevelMapping = {
        0: 'bg-gray-200 dark:bg-gray-700',
        1: 'bg-green-200 dark:bg-green-900',
        2: 'bg-green-400 dark:bg-green-700',
        3: 'bg-green-600 dark:bg-green-600',
        4: 'bg-green-800 dark:bg-green-500',
    };

    return (
        <div className="w-full overflow-x-auto pb-4">
            <HeatmapGrid contributions={data.contributions} />
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                <div className="font-semibold">
                    {total.toLocaleString()} contributions in the last year
                </div>
                <div className="flex items-center gap-2">
                    <span>Less</span>
                    <div className={`w-4 h-4 rounded-sm ${colorLevelMapping[0 as keyof typeof colorLevelMapping]} border border-gray-300 dark:border-gray-600`}></div>
                    <div className={`w-4 h-4 rounded-sm ${colorLevelMapping[1 as keyof typeof colorLevelMapping]}`}></div>
                    <div className={`w-4 h-4 rounded-sm ${colorLevelMapping[2 as keyof typeof colorLevelMapping]}`}></div>
                    <div className={`w-4 h-4 rounded-sm ${colorLevelMapping[3 as keyof typeof colorLevelMapping]}`}></div>
                    <div className={`w-4 h-4 rounded-sm ${colorLevelMapping[4 as keyof typeof colorLevelMapping]}`}></div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

export default function GitHubHeatmap({ username = 'rishvant' }: { username?: string }) {
    const [heatmapData, setHeatmapData] = useState<HeatmapData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const years = useMemo(getYears, []);

    const fetchContributions = useCallback(async (user: string) => {
        if (!user) return;
        setLoading(true);
        setError(null);
        setHeatmapData(null);

        try {
            const response = await fetch(`${API_URL}${user}?y=all`);
            if (!response.ok) {
                let errorMsg = `User not found or API error (status: ${response.status}).`;
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.error || errorMsg;
                } catch (e) {
                    console.error('Failed to fetch contributions:', e);
                }
                throw new Error(errorMsg);
            }
            const data = await response.json();
            if (!data || !data.total || data.contributions === undefined) {
                throw new Error('Contribution data is missing or in an invalid format.');
            }
            setHeatmapData(data);
        } catch (err) {
            console.error('Failed to fetch contributions:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchContributions(username);
    }, [username, fetchContributions]);

    return (
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">GitHub Contributions</h2>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">My coding activity in {selectedYear}</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <label htmlFor="year-select" className="text-sm text-gray-600 dark:text-gray-300">Year:</label>
                        <select
                            id="year-select"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(Number(e.target.value))}
                            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading}
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                    >
                        @{username}
                    </a>
                </div>
            </div>

            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {heatmapData && !loading && !error && (
                <>
                    <Heatmap
                        data={{
                            ...heatmapData,
                            contributions: heatmapData.contributions.filter(day => {
                                const year = new Date(day.date).getFullYear();
                                return year === selectedYear;
                            }),
                            total: {
                                lastYear: heatmapData.total[selectedYear] || 0
                            }
                        }}
                    />
                    <div className="mt-4 text-xs text-gray-500 text-center">
                        <p>Total contributions in {selectedYear}: {heatmapData.total[selectedYear]?.toLocaleString() || 0}</p>
                    </div>
                </>
            )}
        </div>
    );
}
