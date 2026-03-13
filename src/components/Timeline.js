import React from "react"
import { ALL_EXPERIENCE } from "../data/experience";

const Timeline = () => {
  return (
    <div className="timeline" style={{ width: "95%", maxWidth: "800px", margin: "70px auto" }}>
      <h1>Experience</h1>
      {Object.values(ALL_EXPERIENCE).map((experience, index) => (
        <div className="timeline-item">
          <div className="timeline-content">
            <img
              src={experience.image}
              alt={experience.title}
              className="timeline-image"
            />
            <div className="timeline-text">
              <h3>{experience.title}</h3>
              <h4>{experience.role}</h4>
              <p>{experience.location}</p>
              <p>{experience.dateRange}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Timeline;