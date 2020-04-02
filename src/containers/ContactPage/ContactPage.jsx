import React from "react";
import styles from "./ContactPage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {
  return (
    <>
      <section className={styles.contactPage}>
        <h2>Contact</h2>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} className={styles.icon} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={["fab", "instagram-square"]} className={styles.icon} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={["fab", "facebook"]} className={styles.icon} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={["fas", "envelope"]} className={styles.icon} />
        </a>
      </section>
    </>
  );
};

export default ContactPage;
