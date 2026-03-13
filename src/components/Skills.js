import React from 'react'

const SKILLS = [
  "Go", "Python", "JavaScript/TypeScript", "SQL (PostgreSQL)", "C/C++",
  "REST APIs", "Node.js", "Express", "JWT Auth", "MongoDB", "GORM",
  "Docker", "Docker Compose", "Git", "Postman", "Nginx", "React", "HTML/CSS"
];

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="section-title">Skills</h1>
      <div className="title-underline" />
      <ul className="skill-list-text">
        {SKILLS.map((skill, index) => (
          <li key={index} className="skill-pill">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills;
