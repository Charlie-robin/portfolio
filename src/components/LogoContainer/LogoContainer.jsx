import React from "react";
import styles from "./LogoContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoContainer = () => {
  return (
    <>
      <div className={styles.logoBox}>
        <FontAwesomeIcon
          icon={["fas", "laptop-code"]}
          className={styles.laptop}
        />
      </div>
    </>
  );
};

export default LogoContainer;
