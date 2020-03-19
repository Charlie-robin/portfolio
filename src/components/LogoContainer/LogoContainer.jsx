import React from "react";
import styles from "./LogoContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoContainer = () => (
  <FontAwesomeIcon
    icon={["fas", "laptop-code"]}
    className={`${styles.laptop}`}
  />
);

export default LogoContainer;
