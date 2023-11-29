import React, {useState, useEffect} from 'react'
import Card from "./Card";

// project pics
import randomDungeonFront from "../images/project_pics/randomDungeon1.jpeg";
import taskManagerFront from "../images/project_pics/taskManager1.jpeg";
import surrenderCoreFront from "../images/project_pics/surrenderCore1.png";
import chessFront from "../images/project_pics/chess1.png";
import zeldaFront from "../images/project_pics/zelda1.jpeg";


const Categories = {
    ALL: "All",
    REACT: "React",
    CPP: "C++",
    PYTHON: "Python",
    UNITY: "Unity"
};

const Cards = () => {
    const allCardInfo = {
        "Task Manager": {
            category: Categories.REACT,
            image: taskManagerFront,
            title: "Task Manager Full-Stack Web App ",
            skills: ["MERN Stack", "Full-stack", "CSS", ],
            description: `
            Designed and developed a comprehensive full-stack MERN task management application aimed at boosting users’
productivity by allowing users to create, customize and organize their tasks.
            `,
            link: "https://github.com/sirfist19/Task-Manager-App",
          },
        "Randomized Dungeon": 
        {
            category: Categories.CPP,
            image: randomDungeonFront,
            title: "Random Dungeon Game",
            skills: ["C++", "OOP"],
            description: "A randomized text dungeon game inspired by text games from the 1970s like Zork.",
            link: "https://github.com/sirfist19/Randomized_Text_Dungeon",
        },
        "Surrender the Core":
        {
            category: Categories.UNITY,
            image: surrenderCoreFront,
            title: "Surrender the Core - Bullet Hell Video Game",
            skills: ["Unity", "C#"],
            description: `Led a team of 9 engineers with UCLA’s ACM Game Studio club to create a fully-playable bullet-hell game using
            the Unity Game Engine and C# within a 72-hour period for the Ludum Dare Game Jam. 
            `,
            link: "https://ldjam.com/events/ludum-dare/48/surrender-the-core-a-roguelike"
        },
        "Zelda-Style Dungeon Crawler 2D Game":
        {
            category: Categories.PYTHON,
            image: zeldaFront,
            title: "Zelda-Style Dungeon Crawler 2D Game",
            skills: ["Python", "Pygame"],
            description: `A 2D top-down Zelda-like dungeon game in Pygame. This includes a moveable character, enemies, rooms, and items such as keys, hearts, and gold. Navigate the dungeon and defeat the boss at the end of the dungeon!`,
            link: "https://github.com/sirfist19/Zelda-Dungeon-Game"
        },
        "Chess Game":
        {
            category: Categories.PYTHON,
            image: chessFront,
            title: "Chess Game",
            skills: ["Python", "Pygame"],
            description: ` A text-based chess game playable in the console. Uses object-oriented programming.
            • Implemented the rules of chess including basic movement of pieces, captures, checkmates, and pins.
            • Created a user-friendly interface that allows players to move pieces using algebraic chess notation.
            `,
            link: "https://github.com/sirfist19/Chess-Clone"
        },
    };
    const [curCategory, setCurCategory] = useState(Categories.ALL);
    
    let list_num = 0;

    useEffect(() => {
        console.log(`Current category: ${curCategory}`);
    }, [curCategory]);
    return (
    <div className="project-cards">
        <div className="categories">
            {Object.entries(Categories).map(
                ([type, name]) => {
                    //console.log("LOGGING", type, name);
                    return (
                        <button 
                            onClick={() => {
                                setCurCategory(name);
                                list_num = 0;
                                console.log(`Setting category to ${type}`);
                            }}
                            className=
                            {`category${curCategory === name ? '-active' : ''}`}
                            key={type}
                            >
                            {name}
                        </button>
                    );
                }
            )}
        </div>
    <ul>
        {
            Object.values(allCardInfo).filter(
                (card) => {
                    if (curCategory !== Categories.ALL) {
                        //console.log(card, curCategory, card.category)
                        return (curCategory === card.category);
                    }
                    else { // if the category is all don't filter
                        return true;
                    }
                }
            ).map(
                (cardInfo) => {
                    list_num++;
                    return (
                        <li>
                            <Card
                            props={cardInfo}
                            left={list_num % 2 !== 0}
                            />
                        </li>
                    );
                }
            )
        }
    </ul>
    </div>
  )
}
export default Cards
/*
<li>
            <Card 
            props={
                allCardInfo["Task Manager"]}
            left={true}
            />
        </li>
        <li>
            <Card 
            props={
                allCardInfo["Surrender the Core"]}
            left={false}
            />
        </li>
        <li>
            <Card 
            props={
                allCardInfo["Randomized Dungeon"]}
            left={true}
            />
        </li>
*/

