import styles from "./Styles/AboutSection.module.css"
import Fade from "react-reveal/Fade"

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="/ProfileFinal.jpeg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Sanket Musale</span>{" "}
            </h2>
            <p>
            I am a highly skilled web developer with a broad expertise in full-stack development, responsive frameworks, and a strong commitment to best coding practices. I am eager to apply my knowledge and contribute to projects that will not only enhance my experience but also push the boundaries of software development.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
