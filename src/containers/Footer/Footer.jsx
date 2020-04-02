import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <FontAwesomeIcon icon={["fas", "chevron-up"]} className={styles.arrow} />
        <p>Charlie Richardson &copy;</p>
      </footer>
    </>
  );
};

export default Footer;
