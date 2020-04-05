import React from "react";
import styles from "./AboutPage.module.scss";

import profilePic from "../../assets/img/charlie-richardson-1.png";

const AboutPage = () => {
  return (
    <>
      <section id="about" className={styles.aboutPage}>
        <img src={profilePic} alt="" />
        <div className={styles.content}>
          <h2>About</h2>
          <p>
            My desire to learn new technologies has led me to the 12-week
            intensive self-funded _nology course. I am now looking for a
            challenging role in the tech industry where I can build on the
            skills I have been honing.
          </p>
        </div>
        <div className={styles.skills}>
          <div className={`${styles.boxList} ${styles.languages}`}>
            <h3>Languages</h3>
            <ul>
              <li>HTML 5</li>
              <li>CSS / SCSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className={`${styles.boxList} ${styles.tools}`}>
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>React</li>
              <li>Firebase</li>
              <li>Yarn</li>
              <li>Jest / Enzyme</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className={`${styles.boxList} ${styles.concepts}`}>
            <h3>Key Concepts</h3>
            <ul>
              <li>Rest API</li>
              <li>Soft skills</li>
              <li>NoSQL db</li>
              <li>OOP</li>
              <li>Unit testing</li>
            </ul>
          </div>
        </div>
        <div className={styles.flowTriangle}></div>
      </section>
    </>
  );
};

export default AboutPage;
