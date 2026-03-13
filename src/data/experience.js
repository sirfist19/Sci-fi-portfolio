// project pics
//import budgetFront from "../images/project_pics/budget1.png";
import UCLA from "../images/uclaLogo.jpg";
import BlendLogo from "../images/blendLogo.png";

export const Categories = {
    ALL: "All",
    REACT: "React",
    CPP: "C++",
    PYTHON: "Python",
    UNITY: "Unity"
};
/*
image, title, role, skills, description
*/

const UCLADegree = {
    image: UCLA,
    title: "UCLA",
    role: "B.S. Degree in Computer Science",
    skills: [
        "Data Structures",
        "Algorithms",
        "Computer Organization",
        "Operating Systems",
        "Software Engineering",
        "Database Systems",
        "Machine Learning",
        "AI"
    ],
    description: "I graduated from UCLA with a B.S. in Computer Science in June 2019.",
    location: "Los Angeles, CA",
    dateRange: "08/2019 - 06/2023"
};

const Blend = {
    image: BlendLogo,
    title: "Blend Labs",
    role: "Workflow Engineer QA - Backend Focused",
    skills: ["React", "Node.js", "Python"],
    description: "",
    location: "Remote",
    dateRange: "01/2024-02/2025"
};

export const ALL_EXPERIENCE = {
    Blend,
    UCLADegree
};