import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  return (
    <>
      <section className={styles.navbar}>
        <FontAwesomeIcon icon={["fas","times"]} className={styles.icon}/>
        <p>About</p>
        <p>Projects</p>
        <p>Cv</p>
        <p>Contact</p>
      </section>
    </>
  );
};

export default Navbar;
