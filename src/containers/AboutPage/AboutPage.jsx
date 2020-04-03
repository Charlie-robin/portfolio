import React from "react";
import styles from "./AboutPage.module.scss";

import ImgContainer from "../../components/ImgContainer";

const AboutPage = () => {
  return (
    <>
      <section className={styles.aboutPage}>
        <div>
          <ImgContainer />
        </div>
        <h2>About</h2>
        <p>
          My desire to learn new technologies has led me to the 12-week
          intensive self-funded _nology course. I am now looking for a
          challenging role in the tech industry where I can build on the skills
          I have been honing.
        </p>
        <div className={styles.boxList}>
          <h3>Languages</h3>
          <ul>
            <li>HTML 5</li>
            <li>CSS / SCSS</li>
          </ul>
          <ul>
            <li>Javascript</li>
          </ul>
          </div>
          <div className={styles.boxList}><h3>Tools</h3>
          <ul>
          <li>Git</li>
          <li>React</li>
          <li>Firebase</li>
          </ul>
          <ul>
          <li>Yarn</li>
          <li>Jest / Enzyme</li>
          <li>Bootstrap</li>
          </ul>
          </div>
          <div className={styles.boxList}>
          <h3>Key Concepts</h3>
          <ul>
            <li>Rest API</li>
            <li>Soft skills</li>
            <li>NoSQL db</li>
          </ul>
          <ul>
            <li>OOP</li>
            <li>Unit testing</li>
            <li>Source control</li>
          </ul>
        </div>
        <div className={styles.flowTriangle}></div>
      </section>
    </>
  );
};

export default AboutPage;
