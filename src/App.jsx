import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from "./containers/Navbar";
import LandingPage from "./containers/LandingPage";
import AboutPage from "./containers/AboutPage";
import ProjectPage from "./containers/ProjectsPage";
import ContactPage from "./containers/ContactPage"

import "./data/fa-library";

function App() {
  return (
    <>
    <NavBar />
    <LandingPage />
    <AboutPage />
    <ProjectPage />
    <ContactPage />
    </>
  );
}

export default App;
