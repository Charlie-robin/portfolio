import React from "react";
import styles from "./SingleWordHeading.module.scss";

const SingleWordHeading = props => {
  const { headingText } = props;
  return (
    <>
      <h2 className={styles.headingContainer}>{headingText}</h2>
    </>
  );
};

export default SingleWordHeading;
