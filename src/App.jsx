import React from "react";
import styles from "./App.module.scss";
import NavBar from "./containers/Navbar";
import LandingPage from "./containers/LandingPage";
import AboutPage from "./containers/AboutPage";
import ProjectPage from "./containers/ProjectsPage";
import ContactPage from "./containers/ContactPage";
import Footer from "./containers/Footer";

import "./data/fa-library";

function App() {
  return (
    <>
      <NavBar />
      <section className={styles.landingAboutContainer}>
        <LandingPage />
        <AboutPage />
      </section>
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
