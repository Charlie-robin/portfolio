import React from "react";
import styles from "./ProjectsPage.module.scss";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";
import { useState } from "react";

const ProjectsPage = () => {
  const [allProjects, toggleAllprojects] = useState(false);

  const mainProject = projects
    .filter((projectObj) => projectObj.mainProject === true)
    .map((projectObj) => (
      <ProjectCard key={projectObj.title} projectCardData={projectObj} />
    ));

  const subProjects = projects
    .filter((projectObj) => projectObj.mainProject === false)
    .map((projectObj) => (
      <ProjectCard key={projectObj.title} projectCardData={projectObj} />
    ));

  const projectJsx = allProjects ? [mainProject, subProjects] : mainProject;
  const btnText = allProjects ? "less" : "more";

  return (
    <>
      <section id="projects" className={styles.projectPage}>
        <h2>Projects</h2>
        <div className={styles.cardFlex}>
          {projectJsx}
          <button onClick={() => toggleAllprojects(!allProjects)}>
            {btnText}
          </button>
        </div>
        <div className={styles.cardGrid}>
          {mainProject}
          {subProjects}
        </div>
        <div className={styles.flowTriangle}></div>
      </section>
    </>
  );
};

export default ProjectsPage;
