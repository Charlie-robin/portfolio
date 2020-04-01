import React from "react";
import styles from "./ProjectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/img/charlie-richardson-1.png";
import ImgContainer from "../ImgContainer";

const ProjectCard = props => {
  const { title, description, imgUrl, webLink, gitHubLink } = props;
  return (
    <>
      <div className={styles.projectCard}>
        <h3>title</h3>
        <div
          className={styles.cardImg}
          style={{
            backgroundImage: `url(${profile})`
          }}
        ></div>
        <p>description</p>
        <div className={styles.cardLinks}>
          <FontAwesomeIcon
            icon={["fas", "external-link-alt"]}
            className={styles.link}
          />
          <FontAwesomeIcon icon={["fab", "github"]} className={styles.link} />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
