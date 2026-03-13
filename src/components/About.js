import React from 'react'
import profilePic from "../images/glacierPic.jpg";

const About = () => {
  return (
    <div id="about">
      <img id="profilePic" src={profilePic} alt='Aidan at Glacier National Park, Montana' />
      <div id="about-text">
        <h1 className="section-title">About Me</h1>
        <div className="title-underline" />
        <p>I am a software engineer focused on backend development and building real, user-facing systems.
          Currently working on a Chess Tree Visualizer and an AI-powered language flashcard app.
          Interested in scalable system design, efficient APIs, well-thought-out databases, product-driven engineering,
          and AI-driven products that go beyond chat interfaces by combining models with real backend infrastructure.
        </p>
      </div>
    </div>
  )
}

export default About
