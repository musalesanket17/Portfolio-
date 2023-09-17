import { makeStyles } from "@material-ui/styles";
import { SkillCard } from "./SkillCard";
import styles from "./Styles/SkillsSection.module.css";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import { GrMysql } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

export function SkillsSection() {
  return (
    <div className={styles.rootCont} id="skills">
      <Fade bottom>
        <p>Skills</p>
        <p>Technical Skills</p>

        <div className={styles.skillsContFront}>
          <SkillCard
            skill="Java"
            icon={<FaJava className={`${styles.skillIcon} ${styles.java}`} />}
          />
          <SkillCard
            skill="Mysql"
            icon={<GrMysql className={`${styles.skillIcon} ${styles.mysql}`} />}
          />
          <SkillCard
            skill="SpringBoot"
            icon={
              <SiSpringboot
                className={`${styles.skillIcon} ${styles.springboot}`}
              />
            }
          />
          <SkillCard
            skill="Mongodb"
            icon={
              <SiMongodb className={`${styles.skillIcon} ${styles.mongodb}`} />
            }
          />
          <SkillCard
            skill="Dotnet"
            icon={
              <SiDotnet className={`${styles.skillIcon} ${styles.dotnet}`} />
            }
          />

          <SkillCard
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.reactIcon}`}
              />
            }
          />
          <SkillCard
            skill="Redux"
            icon={
              <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
            }
          />
          <SkillCard
            skill="JavaScript"
            icon={
              <SiJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
          <SkillCard
            skill="Chakra Ui"
            icon={
              <SiChakraui className={`${styles.skillIcon} ${styles.muiIcon}`} />
            }
          />

          <SkillCard
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
          <SkillCard
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />

          <SkillCard
            skill="Bootstrap"
            icon={
              <FaBootstrap className={`${styles.skillIcon} ${styles.dotnet}`} />
            }
          />
        </div>

        <p>Tools</p>
        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
          <SkillCard
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
          <SkillCard
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </div>
      </Fade>
    </div>
  );
}
