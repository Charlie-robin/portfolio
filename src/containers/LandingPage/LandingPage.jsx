import React from "react";
import styles from "./LandingPage.module.scss";
import SingleWordHeading from "../../components/SingleWordHeading";
import LogoContainer from "../../components/LogoContainer";

const LandingPage = () => {
  return (
    <>
      <section id="landing" className={styles.landingPage}>
        <h1>Charlie Richardson</h1>
        <div className={styles.logoContainer}>
          <LogoContainer />
        </div>
        <div>
          <div className={styles.subheading}>
            <SingleWordHeading headingText={"Web dev"} />
          </div>
          <div className={styles.subheading}>
            <SingleWordHeading headingText={"Ui Ux"} />
          </div>
        </div>
        <div className={styles.flowTriangle}></div>
      </section>
    </>
  );
};

export default LandingPage;
