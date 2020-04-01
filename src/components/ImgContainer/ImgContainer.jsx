import React from "react";
import styles from "./ImgContainer.module.scss";
import profile from "../../assets/img/charlie-richardson-1.png";

const ImgContainer = () => {
  return (
    <>
      <img className={styles.imgContainer} src={profile} /> 
    </>
  );
};

export default ImgContainer;
