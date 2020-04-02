import React from "react";
import styles from "./Navbar.module.scss";
import cvPdf from "../../assets/charlie-richardson-cv-2019.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [navShowing, toggleNav] = useState(false);
  const navStyles = navShowing ? "" : styles.navClosed;
  const faIcon = navShowing ? (
    <FontAwesomeIcon
      icon={["fas", "times"]}
      className={styles.icon}
      onClick={() => toggleNav(!navShowing)}
    />
  ) : (
    <FontAwesomeIcon
      icon={["fas", "bars"]}
      className={styles.icon}
      onClick={() => toggleNav(!navShowing)}
    />
  );
  return (
    <>
      <section className={`${styles.navbar} ${navStyles}`}>
        {faIcon}
        <a href={"#AboutPage"}><p>About</p></a>
        <p>Projects</p>
        <a href={cvPdf} target="_blank"><p>Cv</p></a>
        <p>Contact</p>
      </section>
    </>
  );
};

export default Navbar;
