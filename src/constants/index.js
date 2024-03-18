import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Data,
  Ibm,
  Bot,
  Vc,
  Wine,
  Article,
  threejs,
  CV,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editer",
    icon: creator,
  },
];
const sm_tech = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript ",
    icon: typescript,
  },
  {
    name: "React JS ",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS ",
    icon: tailwind,
  },
  
]
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript ",
    icon: typescript,
  },
  {
    name: "React JS ",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS ",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "Master Artificial  Intelligence",
    company_name: "Dataisgood Academy",
    icon: Data,
    iconBg: "#fdd835",
    date: "May 2023 - July 2023",
    points: [
      "Covered Ai Algorithms  and Building AI Models.",
      "Deep understanding of Neural Network, Pandas , Nampy.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "IBM Academy",
    icon: Ibm,
    iconBg: "black",
    date: "Nov 2023 - Feb 2024",
    points: [
      "In-depth training covering MongoDB, Express.js, React.Js and Node.js.",
      "Explore API testing and development tools, including postmam, for efficient testing and collaboration",
      "Implementing API's with express.js,Connecting front-end React.js application to back-end services.",
      "Ongoing self-study in Redux for advanced state management in React.js Application",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Bot-VFX",
    icon: Bot,
    iconBg: "white",
    date: "May 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vibra Connect",
    description:
      "Explore social media with this user-friendly platform that has a nice look and lots of features. Easily create and explore posts, and enjoy a strong authentication system and quick data fetching using React Query for a smooth user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Vc,
    source_code_link: "https://vibra-connect.vercel.app/",
  },
  {
    name: "AI Article Summarizer",
    description:
      "Web application that enables user to Summarize any kind of article with just one click using the powerful OpenAI model.This tool aids in saving time and effort by providing users with quick insights into the main ideas and arguments of an article.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: Article,
    source_code_link: "https://raki-summarizer.netlify.app/",
  },
  {
    name: "Wine Quality Prediction",
    description:
      "It's machine learning analyzes wine attributes like acidity, sugar content, and alcohol percentage alongside quality ratings to forecast wine quality. Using ML algorithms like decision trees or neural networks are trained to predict wine quality.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Wine,
    source_code_link: "https://rakesh2642.github.io/Wine_Quality_Prediction/",
  }, 
];
const resume = {
  cv : "CV"
}
export { services, technologies, experiences, testimonials, projects, sm_tech, resume }; 
