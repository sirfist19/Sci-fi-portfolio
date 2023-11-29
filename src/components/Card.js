import React from 'react'

export const Card = ({props, left}) => {
    const {image, title, skills, description, link} = props;
    return (
        <div className={left ? "card-left" : "card-right"}> 
            <img src={image} alt=''/>
            <div className={left ? "card-left-text" : "card-right-text"}>
                <h1 className="card-title">{title}</h1>
                <div className="project-skills">
                    {skills.map(
                        (skill) => (
                            <div className="project-skill">{skill}</div>
                        )
                    )}
                </div>
                <p className="card-description">{description}</p>
                {
                    link &&
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                }
                
            </div>
        </div>
    )
}

export default Card;


