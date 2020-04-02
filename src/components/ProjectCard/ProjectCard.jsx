import React from "react";
import styles from "./ProjectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgTest from "../../assets/img/hall-of-mirrors-landing.PNG";
import ImgContainer from "../ImgContainer";

const ProjectCard = props => {
  const { title, description, imgUrl, webLink, gitHubLink } = props;
  return (
    <>
      <div className={styles.projectCard}>
        <h3>Hall of Mirrors</h3>
        <img src={imgTest} alt=""/>
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
{/* <div
          className={styles.cardImg}
          style={{
            backgroundImage: `url(${imgTest})`
          }}
        ></div> */}