import tradeShala from "../assets/trade-shala.png";
import cipher from "../assets/cipher.png";
import alumni from "../assets/alumni-connect.png";
import fitfusionx from "../assets/fitfusionx.png";
import iiitu from "../assets/Iiit-una-logo.png";
import sgrr from "../assets/sgrr.png";

export const projects = [
  {
    title: "Trade Shala",
    description:
      "A stock market paper trading app with Upstox API, strategy marketplace, and personalized stock recommendations.",
    link: "https://trade-shala.vercel.app",
    image: tradeShala,
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Websockets",
      "MongoDB",
      "Upstox API",
    ],
  },
  {
    title: "Cipher Safe Tests",
    description: "A secure examination system using Cryptography",
    link: "https://cipher-safe-tests.vercel.app",
    image: cipher,
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "Alumni Connect",
    description:
      "A platform that connects alumni for networking and community engagement.",
    link: "https://iiitu-alumni-connect.vercel.app",
    image: alumni,
    skills: ["Node.js", "React.js", "MongoDB", "Express.js", "Bootstrap"],
  },
  {
    title: "Fit FusionX",
    description:
      "An e-commerce platform with a virtual try-on feature for enhanced shopping.",
    link: "https://fit-fusionx.vercel.app",
    image: fitfusionx,
    skills: ["Node.js", "React.js", "MongoDB", "Express.js", "Tailwind CSS"],
  },
];

export const experiences = [
  {
    title: "Backend Developer Intern",
    company: "Kartavya Technologies",
    period: "Jan 2025 - Feb 2025",
    description:
      "Developed and optimized RESTful APIs for the Ophiz App, improving data accessibility and performance while ensuring scalable and efficient backend solutions.",
    responsibilities: [
      "Developed RESTful APIs for the Ophiz App used for report generation, improving data accessibility.",
      "Optimized API response times through pagination, caching mechanisms (Redis), and database indexing, reducing latency by 40%.",
      "Utilized MongoDB aggregation pipelines for complex data processing, resulting in a 30% improvement in query performance.",
      "Worked with AWS services (EC2, S3) to manage cloud infrastructure, ensuring scalable and reliable deployment.",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "AWS (EC2, S3)",
      "REST APIs",
      "Database Optimization",
      "Performance Optimization",
      "Backend Development",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "SnackBAE",
    period: "June 2024 - Aug 2024",
    description:
      "Contributed to building and enhancing an innovative platform for eateries, integrating front-end and back-end systems, and optimizing API performance for an improved user experience.",
    responsibilities: [
      "Seamlessly integrated the menu section with the backend, utilizing API calls to fetch real-time data and ensure dynamic updates.",
      "Built a fully responsive frontend, ensuring flawless user experience across all devices and screen sizes.",
      "Enhanced API performance by optimizing calls, significantly reducing latency and boosting overall application speed.",
      "Collaborated with the development team to implement best coding practices, focusing on code efficiency, maintainability, and scalability.",
    ],
    skills: [
      "Node.js",
      "React.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "REST APIs",
      "API Integration",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
];

export const education = [
  {
    school: "Indian Institute of Information Technology Una",
    degree: "B.Tech",
    period: "2022 - 2026",
    description: "Computer Science and Engineering",
    logo: iiitu,
  },
  {
    school: "S.G.R.R. Public School, CBSE",
    degree: "Class 12th",
    period: "2020 - 2021",
    description: "PCM",
    logo: sgrr,
  },
];

export const skills = [
  {
    name: "React.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  // {
  //   name: "PostgreSQL",
  //   logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  // },
  {
    name: "C++",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Redis",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
];
