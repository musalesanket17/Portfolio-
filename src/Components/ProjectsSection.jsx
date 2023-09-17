import { ProjectCard } from "./ProjectCard";
import styles from "./Styles/ProjectsSection.module.css";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiChakraui } from "react-icons/si";
import Fade from "react-reveal/Fade";
import { GrMysql } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiDotnet } from "react-icons/si";

const projects = [
  {
    name: " Kalakriti- E-commerce website for Handicrafts",
    img: "/Handcraft.png",
    link: "",
    git: "https://github.com/musalesanket17/Kalakriti--E-commerce-website-for-Handicrafts",
    about:
      "Kalakriti is a Handicraft Product Seller Platform .  ",
    stacks: [
      <GrReactjs className={styles.stackIcon} />,
      <GrMysql className={styles.stackIcon} />,
      <SiSpringboot className={styles.stackIcon} />,
      <FaJava className={styles.stackIcon} />,
    ],
  },

  {
    name: " Garbage Management System for Smart City ",
    img: "/SmartCity.png",
    link: "",
    git: "https://github.com/musalesanket17/Web-Based-Garbage-Management-System-for-Smart-City",
    about:
      "The Web-Based Garbage Management System for Smart City is a platform designed to optimize waste collection .",
    stacks: [
      <GrReactjs className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
    ],
  },

  {
    name: "WheelWonders - Bike Showroom Website",
    img: "/BikeConsole.png",
    link: "",
    git: "https://github.com/musalesanket17/WheelWonders---Bike-Showroom-Website-",
    about:
      "Our Bike Showroom Website Console Application is a comprehensive solution designed to streamline the management and presentation of bikes available in our showroom",
    stacks: [
      <SiDotnet className={styles.stackIcon} />,
      <GrMysql className={styles.stackIcon} />,
    ],
  },

  {
    name: "Weather app",
    img: "/Weather_App.png",
    link: "https://fluffy-eclair-142df8.netlify.app/",
    git: "https://github.com/musalesanket17/Weather-App-",
    about:
      "Be the app they choose first for their weather information everyday. ",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "KindMeal.com clone",
    img: "/KindMeal.png",
    link: " https://630f6d9bb6526816d682cbdb--kindmeal-react.netlify.app",
    git: "https://github.com/musalesanket17/Kindmeal.my",
    about:
      "Malaysia's No.1 meat-free lifestyle platform. Grab free coupons for exciting meal deals, discover delicious food and share delightful moments with food ...",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <GrReactjs className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  },
  {
    name: "You Tube App",
    img: "/YouTubeS.png",
    link: "https://funny-tanuki-3d9439.netlify.app",
    git: "https://github.com/musalesanket17/Youtube-Clone-Project",
    about:
      "This project will let you design the pixel art. Let your creativity flow and convert them to images",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },

  // {
  //   name: "Contio",
  //   img: "/contio.png",
  //   link: "https://contio.netlify.app/",
  //   git: "https://github.com/chandan1499/contio",
  //   about:
  //     "Contio is an online portal where anyone can ask there doubts and anyone can become a mentor to help their peers using a built-in chat app",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiNodedotjs className={styles.stackIcon} />,
  //     <SiExpress className={styles.stackIcon} />,
  //     <SiMongodb className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
