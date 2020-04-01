import React from "react";
import styles from "./ProjectsPage.module.scss";
import ProjectCard from "../../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <>
      <section className={styles.projectPage}>
        <h2>Projects</h2>
        <div className={styles.cardGrid}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className={styles.flowTriangle}></div>
      </section>
    </>
  );
};

export default ProjectsPage;
