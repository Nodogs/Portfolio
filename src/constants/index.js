import {
  rc,
  daf,
  tom,
  contactManagement,
  dataManagement,
  datastructures,
  datascience,
  machinelearning,
  gamedevelopment,
  awsjam,
  awscloud,
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
  ge,
  target,
  travelers,
  toh,
  tesla,
  shopify,
  c,
  cplus,
  csharp,
  java,
  python,
  sql,
  swift,
  // jobit,
  // tripguide,
  // threejs,
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
    title: "Computer Engineering Master's (2025)",
    icon: web,
  },
  {
    title: "Computer Engineering Bachelor's",
    icon: mobile,
  },
  {
    title: "Electrical Engineering Bachelor's",
    icon: backend,
  },
  {
    title: "Cybersecurity (Transferred)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "Data Structures",
  //   icon: datastructures,
  // },
  // {
  //   name: "Data Science",
  //   icon: datascience,
  // },
  // {
  //   name: "Machine Learning",
  //   icon: machinelearning,
  // },
  // {
  //   name: "Game Development",
  //   icon: gamedevelopment,
  // },
  // {
  //   name: "AWS Cloud Jam",
  //   icon: awsjam,
  // },
  // {
  //   name: "AWS Cloud Practitioner",
  //   icon: awscloud,
  // },
];

const experiences = [

  {
    title: "Fulfillment Expert Captain",
    company_name: "Target",
    icon: target,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2023",
    points: [
      "Ranked within the top 5% in the district for gross revenue",
      "Promoted to captain for diverse knowledge, involvement, and for being a leader within the company",
      "Programmed products to enable RFID capabilities to find items 80% faster ",
      "Created custom barcodes to allow 50% faster productivity",
    ],
  },
  {
    title: "Renewable Energy Technical Training",
    company_name: "General Electric",
    icon: ge,
    iconBg: "#E6DEDD",
    date: "Summer 2021 - Internship",
    points: [
      "Operated, maintained, and installed various types of solar, wind, and hydrogen energy systems for 5 clients, reducing their carbon footprint by 0.246 tons per year",
      "Learned how to safely work with 3 different technologies and increased the efficiency of those systems by 80%",
    ],
  },
  {
    title: "Assistant Electrical Engineer Internship",
    company_name: "Town of Hempstead Department of Conservation & Waterways",
    icon: toh,
    iconBg: "#383E56",
    date: "Summer 2022 - Internship",
    points: [
      "Designed and applied electrical engineering solutions to reroute wires from one transformer to another, reducing the load by 50% and extending the life span of both transformers by 10 years",
      "Collaborated with the head electrical engineer to test electrical components, ensuring 100% performance and compliance with safety standards",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Travelers",
    icon: travelers,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Designed, developed, tested, and deployed scalable and reliable software solutions for various projects",
      "Worked closely with a team of developers, designers, product managers, and stakeholders to deliver high-quality products and features that met user needs and business goals",
      "Applied agile methodologies and best practices to ensure timely and efficient delivery of software products and features",
      "Enhanced software performance, security, and usability by conducting code reviews, unit testing, refactoring, and documentation",
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
    name: "Dynamic Application Framework",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: daf,
    source_code_link: "https://github.com/",
  },
  {
    name: "Data Management",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: dataManagement,
    source_code_link: "https://github.com/",
  },
  {
    name: "Contact Manager",
    description:
      "Introducing our cutting-edge call summary AI system powered by OpenAI technology. With the advanced transcription capabilities of OpenAI Whisper API, we effortlessly capture and transcribe customer calls, while leveraging the intelligence of ChatGPT to summarize key points. This seamless integration not only ensures 100% customer satisfaction by preserving intricate conversation details but also provides a user-friendly platform for customers to easily access and revisit their discussions, setting a new standard for unparalleled customer experience.",
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
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: contactManagement,
    source_code_link: "https://github.com/",
  },
  {
    name: "TOM",
    description:
      "Experience unparalleled efficiency with our Automated AI Team Meeting Summary Bot. Seamlessly generating detailed summaries and meeting minutes, it goes beyond by analyzing speaker participation and effectiveness, presenting insightful charts and analytics across various timeframes. Elevating productivity, the bot also decodes acronyms, ensuring clear communication and fostering enhanced meeting efficiency for your team.",
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
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: tom,
    source_code_link: "https://github.com/",
  },
  {
    name: "Senior Design Project",
    description:
      "Presenting my groundbreaking senior design project—an autonomous RC car meticulously crafted from design to execution. I skillfully designed, built, and programmed the car using diverse components and programming languages, ensuring a harmonious integration for optimal performance. With CAD drawings guaranteeing structural integrity, safety, and the seamless integration of lidar, radar, and cameras, this project exemplifies my expertise in creating an autonomous vehicle capable of navigating predefined paths and intelligently avoiding obstacles.",
    tags: [
      {
        name: "CAD",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Electrical Engineering",
        color: "pink-text-gradient",
      },
    ],
    image: rc,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
