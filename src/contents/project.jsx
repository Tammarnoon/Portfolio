import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picPro from "../assets/project1.png";
import picPro2 from "../assets/project2.png";
import picPro3 from "../assets/project3.png";

export const data = [
  {
    date: "2024",
    title: "Aquatech-InventoryManage",
    link: "",
    material: [
      { type: faGithub, link: "https://github.com/Tammarnoon/AQS_InvenManage" },
      { type: faYoutube, link: "https://youtu.be/QAQVKcEEz-k" },
    ],
    description: [
      "'My final project for university, developed during my studies in the summer term.'",
    ],
    skill: [
      ["HTML5", "CSS", "JavaScript"],
      ["PHP", "MySQL"],
    ],
    picture: picPro,
  },
  {
    date: "2024",
    title: "Portfolio",
    link: "https://tammarnoon.github.io/Portfolio/",
    material: [
      { type: faGithub, link: "https://github.com/Tammarnoon/Portfolio" },
    ],
    description: [
      "'This is a simple portfolio website project created to showcase my skills, talents, and experience.'",
    ],
    skill: [["React", "TailwindCSS"]],
    picture: picPro2,
  },
  {
    date: "2024",
    title: "Beak-kra-sop Ecom",
    link: "https://beakkrasop-ecom-frontend.vercel.app/",
    material: [
      { type: faGithub, link: "https://github.com/Tammarnoon/BeakkrasopEcom-Backend" },
      { type: faGithub, link: "https://github.com/Tammarnoon/BeakkrasopEcom-Frontend" },
    ],
    description: [
      "'This project is for skill development and deploy Vercel test.'",
    ],
    skill: [["React", "TailwindCSS", "Node.js"]],
    picture: picPro3,
  },
];
