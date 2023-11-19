import React from 'react'
import profilePic from "../images/glacierPic.jpg";

const About = () => {
  return (
    <div id="about">
        <img id="profilePic" src={profilePic} alt='Aidan at Glacier National Park, Montana'/>
        <div id="about-text">
          <h1 className="section-title">About Me</h1>
          <div className="title-underline"/>
          <p>I'm a full-stack developer with a knack for creating 
            user-friendly sleek front-ends and reliable efficient back-ends. 
            I love turning complex problems into simple, effective 
            solutions.
          </p>
          <p>Coding first grabbed my interest when I created a text-based adventure game in C++. 
        I remember loving that I could will into existence whatever I wanted by just coding it!
        I still love that to this day. The difference is now I can will whatever my imagination can come up with.
        Sleek and interactive web designs, 
    full-stack apps to help with productivity or help people with their everyday lives,
    adventure games with stuning graphics and quests that players can get lost in; I know I can make anything in the digital world.
    <p>
    And I love taking on challenges! Grapling and analyzing complex problems until they make my brain hurt is super fun and its even better when
    after lots of work and effort the problems starts breaking into smaller problems that I can tackle piece by piece. </p>
    </p>
        </div>
      </div>
  )
}

export default About
