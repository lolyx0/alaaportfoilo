import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `Passionate and detail-oriented front-end developer, skilled in HTML, CSS, and JavaScript. Focused on creating clean, responsive, and user-friendly web interfaces that ensure seamless experiences and high-quality results. Committed to delivering efficient and error-free code with a strong work ethic.`;

export const EXPERIENCES = [
  {
    year: "July 2024 – October 2024",
    role: "Front End Developer Intern",
    company: "Simplify9, Amman.",
    description: `• Designed wireframes and mockups for client approval prior to development.\n• Built user interfaces with React.js.\n• Developed reusable components for future use in other projects.\n• Collaborated with back-end developers on integrating APIs into front-end solutions.\n• Learned new front-end programming languages and methodologies to perform tasks.\n• Created technical requirements and worked with engineering team to develop, test and launch functionality on time and with high quality.`,
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "Redux",
      "Material-UI",
      "Figma",
    ],
  },
];

export const PROJECTS = [
  {
    title: "GitAPI searcher",
    image: project1,
    description:
      "efficient web application designed to fetch and display real-time GitHub user data. Whether you're a developer, recruiter, or open-source enthusiast, GitAPI provides a streamlined way to explore GitHub profiles, repositories, and contributions with ease.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Framer motion"],
    demoLink: "https://gittapi-1.pages.dev/",
  },
  {
    title: "Climate tracker dashboard",
    image: project2,
    description:
      "An intuitive web app offering real-time weather updates, historical climate data, and air quality info for any location worldwide. Powered by OpenWeatherMap APIs, it features interactive maps displaying weather patterns like precipitation, wind, temperature, and cloud cover.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MUI", "Framer motion"],
    demoLink: "https://climate-dashboard.pages.dev/",
  },
  {
    title: "MedLocator",
    image: project3,
    description:
      "a system designed to alleviate the challenges individuals face in accessing necessary medications. It provides users with real-time data on medication availability, pricing, and delivery options, simplifying the process of locating nearby pharmacies. The system will provide more functionalities such as pill identifier and symptom checker.",
    technologies: ["HTML", "CSS", "React", "mySQL"],
    demoLink: "https://your-demo-link.com/medlocator", 
  },
];
