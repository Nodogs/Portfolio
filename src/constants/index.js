import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,

  c,
  cplus,
  csharp,
  java,
  python,
  sql,
  swift,

  ge,
  target,
  toh,
  travelers,

  daf,
  dataManagement,
  contactManagement,
  rc,
  tom,
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
    title: "Computer Engineering (M.S. 2025)",
    icon: web,
  },
  {
    title: "Computer Engineering (B.S.)",
    icon: mobile,
  },
  {
    title: "Electrical Engineering (B.S.)",
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
      "I've embraced the role of a mentor since the inception of the program, dedicating my time to assist both new and seasoned team members in enhancing their job responsibilities for the benefit of the company. This commitment to mentorship reflects my dedication to fostering efficiency and growth among my colleagues. Being chosen as a mentor is a testament to my leadership abilities and capacity to effectively balance this role while efficiently handling my own job responsibilities. It's a role that not only allows me to contribute to the development of others but also reinforces my position as a capable leader within the organization.",
    name: "Mentorship",
    designation: "Member",
    company: "Travelers",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I have had the privilege of serving as a co-lead for the club “Line of Business (LOB) Peer & Leadership Networking”, where I facilitate networking opportunities and knowledge sharing among colleagues. In this role, I engage with senior executives and leaders within the company, providing a platform for others to witness and learn from their experiences and journeys to their current positions. By fostering these interactions, I aim to inspire and educate colleagues at all levels within the organization, offering valuable insights into the paths to leadership roles and how individuals can aspire to achieve similar career milestones. This role has not only enhanced my leadership and organizational skills but has also allowed me to contribute to the professional development of my peers.",
    name: "Leadership and Networking",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I have actively pursued a master’s program in Computer Engineering, focusing on advanced topics and cutting-edge technologies. This ongoing education is not only enriching my technical knowledge but also preparing me to make more significant contributions to Travelers. By attaining a master’s degree in computer engineering, I aim to leverage a deeper understanding of complex systems, emerging trends, and specialized skills that will enable me to play a pivotal role in solving complex challenges within the company. This advanced degree will equip me to provide valuable insights and innovations beyond the capabilities of a bachelor's degree, ultimately contributing to Travelers' technological advancement and success.",
    name: "Educational Advancement",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I'm responsible for vetting external training programs to ensure our team members receive high-quality resources for cloud application setup. This process equips our teams with the latest industry practices, benefiting other teams across the organization. With everyone well-versed in cloud best practices, it streamlines the process for my team to provide support and accelerate the deployment of other teams' applications to the cloud. This collaboration enhances overall operational efficiency and the effectiveness of our cloud services.",
    name: "External Training Verification",
  },
  {
    testimonial:
      "At Travelers, I've been fortunate to engage with prominent figures like Daymond John and other industry leaders. This unique opportunity allows me to ask insightful questions and gain invaluable insights and perspectives from accomplished entrepreneurs and professionals. These interactions play a pivotal role in shaping my career as I learn from their experiences and adopt their mindsets. This exposure to industry giants not only enriches my knowledge but also empowers me to navigate my career path more effectively, aiming to follow in their footsteps and achieve greater success.",
    name: "Engagement with Industry Leaders",
  },
  {
    testimonial:
      "Collaborated with professors and peers to design efficient circuits, networks, and software.",
    name: "IEEE Club",
  },
];

const projects = [
  {
    name: "Dynamic Application Framework",
    description:
      "I spearheaded the end-to-end development of the Dynamic Application Framework project, streamlining project management across the organization by replacing manual Excel processes with an efficient and user-friendly system, ultimately reducing time and cost inefficiencies while enhancing resource allocation.",
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
    name: "Cloud Intake Infrastructure",
    description:
      "I played a crucial role in establishing the Cloud Intake Infrastructure project, which streamlined cloud usage, enhanced operational efficiency, and empowered teams across the organization by automating cloud service creation, reducing turnaround time, and enabling our team to focus on critical issues and support collaborative work environments.",
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
    name: "Call Summary AI System",
    description:
      "I played a pivotal role in developing an innovative AI system that enhances customer call interactions by actively listening to and summarizing conversations, utilizing OpenAI Whisper API for transcription and OpenAI ChatGPT for summarization, ultimately providing customers with detailed, email-accessible summaries that can significantly improve post-call clarity and accessibility.",
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
    name: "Automated AI Team Meeting Summary Bot",
    description:
      "I played a key role in developing an innovative AI-driven bot that enhances team meetings by seamlessly integrating into virtual sessions, actively summarizing conversations, discerning speakers, rating participant contributions, decoding acronyms, and generating detailed charts and analytics, ultimately improving meeting productivity and knowledge sharing practices.",
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
    name: "Autonomous RC Car",
    description:
      "I designed, built, and programmed an autonomous car with integrated sensors (lidar, radar, and cameras), utilizing various components and languages, and created CAD drawings to ensure structural integrity and safety, enabling the car to autonomously navigate predefined paths and avoid obstacles.",
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
