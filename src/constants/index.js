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
  sustainabilityblog,
  etsy, 
  pulse,
  tripguide,
  threejs,
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
    title: "Data Science Major",
    icon: web,
  },
  {
    title: "Pre Med Student",
    icon: mobile,
  },
  {
    title: "Visual Designer",
    icon: backend,
  },
  {
    title: "Environmentalist",
    icon: creator,
  },
];

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
    title: "Grader",
    company_name: "Kumon",
    icon: 'https://i.pinimg.com/originals/ac/04/b7/ac04b76deaff89c58625524b7ceddf6a.jpg',
    iconBg: "#63d0f7",
    date: "June 2017 - May 2022",
    points: [
      "Tutored math and reading curriculums for 5 years",
      "Worked with hundreds of students ages 3-18",
    ],
  },
  {
    title: "Lab Work",
    company_name: "Duke University",
    icon: "https://cdn.wallpapersafari.com/44/69/mOAxPW.jpg",
    iconBg: "#001a53",
    date: "September 2021 - May 2022",
    points: [
      "Lab Administrative Assistant [David Lab] : Ordered supplies, organized meetings, and tracked chemical inventory for lab projects",
      "Research Assistant [Bernhard Lab]: Identified and recorded data on 1000s of insects from the Hubbard Brook and Ellerbe Creek watersheds",
    ],
  },
  {
    title: "Data+ Intern",
    company_name: "Rhodes Information Initiative",
    icon: 'https://yt3.ggpht.com/a/AATXAJyOzKtMG5Q8_EXwpdo5GPrKOwCke__gKkkpHA=s900-c-k-c0xffffffff-no-rj-mo',
    iconBg: "white",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Worked on the Gamifying Risk Identitifcation project",
      "Coded a Brief Intervention therapy simulation using Active Inference (Machine learning)",
    ],
  },
  {
    title: "Software Intern",
    company_name: "iASPEC Technologies",
    icon: 'https://partners.hkstp.org/PublicLibrary/ProfilePic154.jpg',
    iconBg: "white",
    date: "August 2022 - December 2022",
    points: [
      "Designed and deployed a timecard management website and database",
      "Created 9 interactive online courses for educational nonprofit use",
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
    name: "PULSE",
    description:
      "A student led project on research and app development to improve campus wellbeing, funded by DKU Innovation and Entrepreneurship",
    tags: [
      {
        name: "Leadership",
        color: "blue-text-gradient",
      },
      {
        name: "Research",
        color: "green-text-gradient",
      },
      {
        name: "Coding",
        color: "pink-text-gradient",
      },
    ],
    image: pulse,
    source_code_link: "https://www.linkedin.com/company/pulsepulseco/",
  },
  {
    name: "Cherukie",
    description:
      "An Etsy shop started and co-owned by a friend. Selling custom commissions, self designed stickers, and other handmade products.",
    tags: [
      {
        name: "Design",
        color: "blue-text-gradient",
      },
      {
        name: "Entrepreneurship",
        color: "pink-text-gradient",
      },
    ],
    image: etsy,
    source_code_link: "https://www.etsy.com/shop/cherukie",
  },
{
  name: "Sustainability Blog",
  description:
    "A personal blog on navigating the complexity of living sustainably and a docmentation of my attempts at it.",
  tags: [
    {
      name: "Writing",
      color: "blue-text-gradient",
    },
    {
      name: "Sustainability",
      color: "green-text-gradient",
    },
  ],
  image: sustainabilityblog,
  source_code_link: "https://sustainablytrying.blogspot.com/",
},
];

export { services, technologies, experiences, testimonials, projects };