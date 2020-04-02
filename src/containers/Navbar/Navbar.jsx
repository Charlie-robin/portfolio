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
        <a href={"#aboutPage"}></a><p>About</p>
        <p>Projects</p>
        <p>Cv</p>
        <p>Contact</p>
      </section>
    </>
  );
};

export default Navbar;
