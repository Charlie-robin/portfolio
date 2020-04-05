import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a href="#landing"><FontAwesomeIcon icon={["fas", "chevron-up"]} className={styles.arrow} /></a>
        <p>Charlie Richardson &copy;</p>
      </footer>
    </>
  );
};

export default Footer;
