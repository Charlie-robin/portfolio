import React from "react";
import styles from "./ContactPage.module.scss";
import cvPdf from "../../assets/charlie-richardson-cv-2019.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {
  return (
    <>
      <section id="contact" className={styles.contactPage}>
        <h2>Contact</h2>
        <div>
          <a
            href={cvPdf}
            className={styles.contactCv}
            target="_blank"
            rel="noopener noreferrer"
          >
            cv
          </a>
          <a
            href="https://github.com/Charlie-robin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className={styles.socials}
            />
          </a>
          <a
            href="mailto:charlie.robin.richardson@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className={styles.socials}
            />
          </a>
        </div>
        <div className={styles.socialContainer}>
          <a
            href="https://www.linkedin.com/in/charlie-richardson-625ab3190"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={styles.socials}
            />
          </a>
          <a
            href="https://www.facebook.com/charlie.richardson.167"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className={styles.socials}
            />
          </a>
          <a
            href="https://www.instagram.com/radioactiveradness/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram-square"]}
              className={styles.socials}
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
