import React from "react";
import styles from "./ProjectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({projectCardData}) => {
  const linkStyles = projectCardData.gitHubLink === "" ?  <a href={projectCardData.webLink} target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon
    icon={["fas", "external-link-alt"]}
    className={`${styles.link} ${styles.linkBorder} ${styles.fullLink}`}
  />
</a>
  :
  <><a href={projectCardData.webLink} target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon
    icon={["fas", "external-link-alt"]}
    className={`${styles.link} ${styles.linkBorder}`}
  />
</a>
<a href={projectCardData.gitHubLink} target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={["fab", "github"]} className={styles.link} />
</a></>
  ;
  return (
    <>
      <div className={styles.projectCard}>
        <h3>{projectCardData.title}</h3>
        <img src={projectCardData.primaryImg} alt={projectCardData.imgAlt} />
        <p>{projectCardData.description}</p>
        <div className={styles.cardLinks}>
          {linkStyles}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

