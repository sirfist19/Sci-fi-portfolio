import React from 'react'

export const ExperienceCard = ({props, left}) => {
    const {image, title, role, skills, description} = props;
    return (
        <div className={left ? "card-left" : "card-right"}> 
            <img src={image} alt=''/>
            <div className={left ? "card-left-text" : "card-right-text"}>
                <h1 className="card-title">{title}</h1>
                <h2 className="card-role">{role}</h2>
                <div className="project-skills">
                    {skills.map(
                        (skill) => (
                            <div className="project-skill">{skill}</div>
                        )
                    )}
                </div>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;


