import React from "react";
import styles from "./SingleWordHeading.module.scss";

const SingleWordHeading = props => {
  const {headingText} = props
  return (
    <>
      <div className={styles.headingContainer}>
        <h2>{headingText}</h2>
      </div>
    </>
  );
};

export default SingleWordHeading;
