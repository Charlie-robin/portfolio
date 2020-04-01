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
        <h2>Tech</h2>
        <div className={styles.boxList}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            dolore voluptas exercitationem quasi? Magnam et, porro sunt
            explicabo accusantium voluptatum odit facilis sapiente est quisquam
            adipisci? Doloremque quam dolor tempora.
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            dolore voluptas exercitationem quasi? Magnam et, porro sunt
            explicabo accusantium voluptatum odit facilis sapiente est quisquam
            adipisci? Doloremque quam dolor tempora.
          </p>
        </div>
        <div className={styles.flowTriangle}></div>
      </section>
    </>
  );
};

export default AboutPage;
