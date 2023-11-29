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


function App() {

  return (
    <div className="App">
      <Scene overlay_content={
        <div>
          <Navbar top={true}/>
          <TitleText/>
        </div>
      }
       scene_type="TITLE"
      />
      
      <About/>
      <Scene overlay_content={<Skills/>}
        scene_type="SKILLS"
      />
      
      
      <div id="projects">
        <div className="project-text">
          <h1 className="section-title">Projects</h1>
          <div className="title-underline"/>
          <Cards />
        </div>
      </div>

      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
