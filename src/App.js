import React from 'react';

// component imports
import Navbar from "./components/Navbar";
import Scene from "./components/Scene";
//import TorusScene from "./components/TorusScene";
import Contact from './components/Contact';
import About from './components/About';
import Skills from "./components/Skills";
import TitleText from "./components/TitleText";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Timeline from "./components/Timeline";
import LifePage from "./pages/LifePage";

// router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Home component to hold the main portfolio pages
const Home = () => {
  return (
    <>
      <Scene overlay_content={
        <div>
          <Navbar top={true} />
          <TitleText />
        </div>
      }
        scene_type="TITLE"
      />

      <About />
      <Scene overlay_content={<Skills />}
        scene_type="SKILLS"
      />
      <Timeline />


      <div id="projects">
        <div className="project-text">
          <h1 className="section-title">Projects</h1>
          <div className="title-underline" />
          <Cards />
        </div>
      </div>

      <Contact />
      <Footer />
    </>
  );
}

function App() {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life" element={<LifePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
