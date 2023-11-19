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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  chakraui,
  mongoose,
  dsa,
  express,
  qeep,
  grow,
  qeepProject,
  growFin,
  furlinko,
  furlinkoLogo,
  homesweeter,
  home,
} from "../assets";

export const navLinks = [
  {
    spy: true,
    smooth: true,
    offset: 0,
    duration: 50,
    id: "home",
    className: "nav-link home",
    title: "Home",
  },
  {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 50,
    id: "about",
    className: "nav-link about",
    title: "About",
  },
  {
    spy: true,
    smooth: true,
    offset: -90,
    duration: 50,
    id: "skills",
    className: "nav-link skills",
    title: "Skill",
  },
  {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 50,
    id: "projects",
    className: "nav-link projects",
    title: "Projects",
  },
  {
    spy: true,
    smooth: true,
    offset: -110,
    duration: 50,
    id: "statistics",
    className: "nav-link statistics",
    title: "Statistics",
  },
  {
    spy: true,
    smooth: true,
    offset: -30,
    duration: 50,
    id: "contact",
    className: "nav-link contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const frontEnd = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "chakraui",
    icon: chakraui,
  },
];

const backendskill = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "dsa",
    icon: dsa,
  },
  {
    name: "express",
    icon: express,
  },
];

const experiences = [
  {
    title: "HomeSweeter, The online Property Selling, Buying and Rental",
    techStack:
      "HTML | CSS | JavaScript | React.Js | Redux | Chakra Ui | Node.Js | Express.Js | MongoDB",
    icon: homesweeter,
    iconBg: "#383E56",
    date: "26 August - 30 August 2023",
    image: home,
    github: "https://github.com/ankitkrai07/gusty-adjustment-6018",
    live: "https://homesweeter-ocuzifg6m-ankitkrai07.vercel.app/",
    points: [
      "A collaborative project built by a team of 3 full-stack web developers in 5 days",
      "I am responsible for the login, registration, and admin panel parts. Implemented user registration, CRUD operations, and authentication features, including product card and purchase functionalities.",
      "The admin panel includes adding and deleting products, as well as filtering and sorting them, along with a Wishlist feature.",
      "Developed this project within a 5-day timeframe",
    ],
  },
  {
    title: "Furlinko, The online Furniture Store",
    techStack: "HTML | CSS | JavaScript | React.Js | Redux | Chakra Ui",
    icon: furlinkoLogo,
    iconBg: "#383E56",
    date: "22 August - 26 August 2023",
    image: furlinko,
    github: "https://github.com/Hardik8140/gas-scarecrow-3264",
    live: "https://gas-scarecrow-3264.vercel.app/",
    points: [
      "A collaborative project built by a team of 2 full-stack web developers in 5 days. ",
      "All the given functionalities are my responsibility, and I am also the team leader",
      "I implemented user registration, CRUD operations, and authentication features, including product cards and purchases.",
      "The admin panel involves adding and deleting products, as well as filtering, sorting, and managing the Wishlist. ",
      "Developed this project within a 5-day timeframe",
    ],
  },
  {
    title: "Qeep, The online shoe Store",
    techStack: "React.js | Chakra Ui | Javascript | HTML | CSS",
    icon: qeep,
    iconBg: "#383E56",
    date: "18 July - 22 July 2023",
    image: qeepProject,
    github: "https://github.com/Hardik8140/guided-aftermath-7976",
    live: "https://qeep-rho.vercel.app/",
    points: [
      "Implemented user registration, CRUD operations, and authentication features, along with product card and purchase functionalities",
      "Admin panel responsibilities include adding and deleting products, as well as filtering, sorting, and managing the Wishlist.",
      "Developed this project within a 5-day timeframe.",
    ],
  },
  {
    title: "Grow Fin, The Financial Site",
    techStack: "React.js | Chakra Ui | Javascript | HTML | CSS",
    icon: grow,
    iconBg: "#E6DEDD",
    date: "13 June - 17 June 2023",
    image: growFin,
    github: "https://github.com/Hardik8140/waiting-knife-3384",
    live: "https://waiting-knife-3384-teal.vercel.app/",
    points: [
      "Implemented registration and plan purchase to help users find investors and entrepreneurs.",
      "Created a dynamic landing page with a responsive design.",
      "Developed the project individually within a timeframe of 5 days.",
      "Designed Grow Fin, a platform connecting investors and entrepreneurs for collaboration with startups.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  frontEnd,
  backendskill,
  experiences,
  testimonials,
  projects,
};
