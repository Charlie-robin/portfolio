import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from "./containers/Navbar";
import LandingPage from "./containers/LandingPage";
import "./data/fa-library";

function App() {
  return (
    <>
    <NavBar />
    <LandingPage />
    </>
  );
}

export default App;
