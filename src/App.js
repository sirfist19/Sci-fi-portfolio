import React from 'react';

// component imports
import Navbar from "./components/Navbar";
import SpaceScene from "./components/SpaceScene";
import TorusScene from "./components/TorusScene";
import Contact from './components/Contact';
import About from './components/About';
import Skills from "./components/Skills";
import TitleText from "./components/TitleText";
import Footer from "./components/Footer";

// project pics
import randomDungeonFront from "./images/project_pics/randomDungeon1.jpeg";

function App() {
  /* 
    Who am I for the portfolio?
    From LA
    UCLA CS Grad
    Frontend and full-stack enthusiast (I like building things for the web)
    But I also like just building software
    
    Speak to your interest and passion in coding...
      -> when did you get interested 
    
    Coding first grabbed my interest, when I created a text-based adventure game in C++. 
    I remember loving that I could will into existence whatever I wanted by just coding it!
    I still love that to this day. The difference is now I can will whatever my imagination can come up with.
    Sleek and interactive web designs, 
    full-stack apps to help with productivity or help people with their everyday lives,
    adventure games with stuning graphics and quests that players can get lost in; I know I can make anything in the digital world.
    
    And I love taking on challenges! Grapling and analyzing complex problems until they make my brain hurt is super fun and its even better when
    after lots of work and effort the problems starts breaking into smaller problems that I can tackle piece by piece. 
    
    And that's not to mention
    the thrill of a collaborative environment where the team of people all dig in and speed up the analyzing and grapling! 
    Experience & Education section:

  */

  return (
    <div className="App">
      <SpaceScene overlay_content={
        <div>
          <Navbar/>
          <TitleText/>
        </div>
      }/>
      <About/>
      <TorusScene overlay_content={
        <Skills/>
      }/>
      
      
      <div id="projects">
        <div className="project-text">
          <h1 className="section-title">Projects</h1>
          <div className="title-underline"/>
          <div className="project-cards">
            <ul>
              <li>
                <div className="card-left"> 
                  <img src={randomDungeonFront} alt='Random Dungeon Starting Screen' />
                  <div className="card-left-text">
                    <h1 className="card-title">Random Dungeon</h1>
                    <p className="card-description">A randomized text dungeon game inspired by text games from the 1970s like Zork.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card-right"> 
                  <img src={randomDungeonFront} alt='Random Dungeon Starting Screen' />
                  <div className="card-right-text">
                    <h1 className="card-title">Random Dungeon</h1>
                    <p className="card-description">A randomized text dungeon game inspired by text games from the 1970s like Zork.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card-left"> 
                  <img src={randomDungeonFront} alt='Random Dungeon Starting Screen' />
                  <div className="card-left-text">
                    <h1 className="card-title">Random Dungeon</h1>
                    <p className="card-description">A randomized text dungeon game inspired by text games from the 1970s like Zork.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
