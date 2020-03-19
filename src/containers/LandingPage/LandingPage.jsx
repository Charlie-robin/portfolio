import React from "react";
import styles from "./LandingPage.module.scss";
import SingleWordHeading from "../../components/SingleWordHeading"

const LandingPage = () => {
  return (
    <>
      <h1>Charlie Richardson </h1>
    <SingleWordHeading headingText={"Web dev"}/>
    <SingleWordHeading headingText={"Ui Ux"}/>
    </>
  );
};

export default LandingPage;
