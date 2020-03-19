import React from "react";
import styles from "./LandingPage.module.scss";
import SingleWordHeading from "../../components/SingleWordHeading";
import LogoContainer from "../../components/LogoContainer";

const LandingPage = () => {
  return (
    <>
      <h1>Charlie Richardson </h1>
      <LogoContainer />
      <SingleWordHeading headingText={"Web dev"} />
      <SingleWordHeading headingText={"Ui Ux"} />
    </>
  );
};

export default LandingPage;
