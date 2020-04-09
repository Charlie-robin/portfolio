import React from "react";
import styles from "./Navbar.module.scss";
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
        <a href="#about" onClick={() => toggleNav(!navShowing)}>About</a>
        <a href="#projects" onClick={() => toggleNav(!navShowing)}>Projects</a>
        <a href="#contact" onClick={() => toggleNav(!navShowing)}>Contact</a>
      </section>
    </>
  );
};

export default Navbar;
