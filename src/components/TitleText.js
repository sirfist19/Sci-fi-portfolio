import React from 'react'

const occupations = ["Full-stack and AI developer",
    "Software Engineer",
    "AI Developer",
    "Foreign Language Learner",
    "Curious and passionate learner"
]

const TitleText = () => {
  return (
    <div className="title-section">
        <div className="title-text">
          <h1 id="hello-text">Hello, I am<span id="name"> Aidan Cini.</span></h1>
          <h2 id="occupation-text">{occupations[0]}</h2>
        </div>
      </div>
  )
}

export default TitleText;
