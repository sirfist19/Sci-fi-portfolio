import React from 'react'
// skill logo images
import pythonLogo from '../images/skill_logos/Python-Symbol.png';
import cppLogo from '../images/skill_logos/C++_Logo.png'
import jsLogo from '../images/skill_logos/JavaScript-logo.png'
import reactLogo from '../images/skill_logos/react_original_logo.png'
import nodeExpressLogo from '../images/skill_logos/nodeExpress.svg'
import mongoLogo from '../images/skill_logos/mongodb_logo.png';
import sqlLogo from '../images/skill_logos/4-postgres.jpg';
import cssLogo from '../images/skill_logos/cssLogo.png';
import htmlLogo from '../images/skill_logos/HTML5_Logo_.webp';
import reactNativeLogo from '../images/skill_logos/reactNativeLogo.webp';

const Skills = () => {
  return (
    <div id="skills"> 
          <h1 className="section-title">Skills</h1>
          <div className="title-underline"/>
          <ul className="skill-list">
            <li>
              <img src={pythonLogo} alt="Python logo"/>
            </li>
            <li>
              <img src={jsLogo} alt="JS Logo"/>
            </li>
            <li>
              <img src={reactLogo} alt="React logo"/>
            </li>
            
            <li>
              <img src={nodeExpressLogo} alt="Node and Express logo"/>
            </li>
            <li>
              <img src={mongoLogo} alt="MongoDB logo"/>
            </li>
            <li>
              <img src={sqlLogo} alt="SQL Logo"/>
            </li>
            <li>
              <img src={cppLogo} alt="C++ Logo"/>
            </li>
            <li>
              <img src={cssLogo} alt="CSS Logo"/>
            </li>
            <li> 
              <img src={htmlLogo} alt="CSS Logo"/>
            </li>
            <li> 
              <img src={reactNativeLogo} alt="CSS Logo"/>
            </li>
          </ul>
        </div>
  )
}

export default Skills;
