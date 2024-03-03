// import images
import Hero_person from "./assets/images/Hero/person2.png";

import tail from "./assets/images/Skills/tailwind-css.png";
import mongo from "./assets/images/Skills/mongodb.png";
import html from "./assets/images/Skills/html5.png";
import js from "./assets/images/Skills/javascript.png";
import ex from "./assets/images/Skills/express.png";
import css from "./assets/images/Skills/css3.png";
import boot from "./assets/images/Skills/bootstrap.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";

import pic1 from "./assets/images/Services/recipeweb.png";
import pic2 from "./assets/images/Services/course.png";
import pic3 from "./assets/images/Services/jobportal.png";
import pic4 from "./assets/images/Services/dis.png";
import pic5 from "./assets/images/Services/ecommerce.png";
// import pic6 from "./assets/images/Services/travel.png";
import pic7 from "./assets/images/Services/real.png";

import {
  GrGithub,
  GrLinkedin,
  GrMail,
  GrProjects,
  GrTwitter,
} from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdDeveloperMode,
  MdPersonalInjury,
} from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#services",
      icon: GrProjects,
    },
    {
      link: "#skills",
      icon: MdDeveloperMode,
    },
    {
      link: "#contact",
      icon: BiUser,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "VINAY",
    LastName: "B H",
    btnText: "Connect Me",
    btnText2: "Resume",
    image: Hero_person,
    link1: "https://www.linkedin.com/in/vinay-b-h-06a09825b",
    link2:
      "https://drive.google.com/file/d/1Z3i7wiQadBL36mYI4jKDL7hUycSwPVUb/view?usp=sharing",
    hero_content: [
      {
        count: "8+",
        text: "LET'S BUILD SOMETHING TOGETHER",
      },
      {
        count: "20+",
        text: "I am a passionate Full Stack Developer, I recently completed my BCA degree in Computer Applications. I'm focused on building a fullstack web applications while learning & exploring other technologies.",
      },
    ],
  },
  skills: {
    title: "My Skills",
    subtitle: "Technologies I use in my development",
    skills_content: [
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "Express js",
        logo: ex,
      },
      {
        name: "MongoDB",
        logo: mongo,
      },
      {
        name: "JavaScript",
        logo: js,
      },
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "BootStrap",
        logo: boot,
      },
      {
        name: "Tailwind",
        logo: tail,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Projects",
    subtitle: "Take a look at my projects:",
    service_content: [
      {
        title: "Real Estate",
        para: "A Real Estate project where users can buy a home or rent a home, Users can also sell the home. Users can create, update, and delete their listings. Users can share the link of the home with others and Users can easily connect with the landlord.",
        para2: "React, ExpressJS, NodeJs, MongoDb, TailwindCss.",
        logo: pic7,
        demo: "https://mern-estate-cq90.onrender.com",
        code: "https://github.com/vinaybh01/mern-estate",
      },
      {
        title: "Recipe Website",
        para: "A recipe website where people can share and discover recipes. It creates a lively community of food lovers, with an easy-to-use design, a variety of recipes, and a sense of connection through cooking.",
        para2: "React, ExpressJS, NodeJs, MongoDb.",
        logo: pic1,
        demo: "https://recipe-app-h06o.onrender.com",
        code: "https://github.com/vinaybh01/recipe-web-frontend",
      },
      {
        title: "Course Selling & Buying Website",
        para: "A course platform where admins effortlessly manage courses - creating, editing, and deleting. Users sign up to explore and purchase courses, fostering a streamlined learning experience.",
        para2: "React, ExpressJS, NodeJs, MongoDb.",
        logo: pic2,
        demo: "https://course-app-mern.onrender.com",
        code: "https://github.com/vinaybh01/course-selling-app-client",
      },
      {
        title: "Job Portal",
        para: "Simplifying job searches, this platform allows users to effortlessly filter and apply for jobs. Admins, on the other hand, can efficiently create, edit, and delete job listings for their company.",
        para2: "React, ExpressJS, NodeJs, MongoDb, TailwindCss.",
        logo: pic3,
        demo: "https://job-portal-app-3puy.onrender.com",
        code: "https://github.com/vinaybh01/job-portal-frontend",
      },
      {
        title: "Disaster Relief",
        para: "Enabling seamless connection and support in times of disaster through a comprehensive web application, uniting relief organizations, volunteers, and victims.",
        para2: "Html, Css, Bootstrap.",
        logo: pic4,
        demo: "https://ybhumi.github.io/disaster-relief",
        code: "https://github.com/vinaybh01/disaster-relief",
      },
      {
        title: "E-Commerce Website",
        para: " An eCommerce website I built, providing a user-friendly and visually appealing platform for online shopping.",
        para2: "ReactJs, JavaScript.",
        logo: pic5,
        demo: "https://vinaybh0107-ecommerce.netlify.app",
        code: "https://github.com/vinaybh01/ecommerce-website",
      },
    ],
  },
  Contact: {
    title: "Contact Me",
    subtitle: "Get in touch",
    social_media: [
      {
        text: "vinaybh0107@gmail.com",
        icon: GrMail,
        link: "mailto:vinaybh0107@gmail.com",
      },
      {
        text: "+91 7022853572",
        icon: MdCall,
        link: "https://wa.me/7022853572",
      },
      {
        text: "Vinay",
        icon: GrLinkedin,
        link: "https://www.linkedin.com/in/vinay-b-h-06a09825b/",
      },

      {
        text: "vinaybh01",
        icon: GrGithub,
        link: "https://github.com/vinaybh01",
      },
      {
        text: "VinayBH",
        icon: GrTwitter,
        link: "https://twitter.com/VinayBH1554211",
      },
    ],
  },
};
