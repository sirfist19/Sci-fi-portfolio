// project pics
import randomDungeonFront from "../images/project_pics/randomDungeon1.jpeg";
import taskManagerFront from "../images/project_pics/taskManager1.jpeg";
import surrenderCoreFront from "../images/project_pics/surrenderCore1.png";
import chessFront from "../images/project_pics/chess1.png";
import zeldaFront from "../images/project_pics/zelda1.jpeg";
import elTacoLlamaFront from "../images/project_pics/elTacoLlama1.png";
import budgetFront from "../images/project_pics/budget1.png";
import chess_visualizer_pic from "../images/project_pics/chess_visualizer1.png";
import language_ai_app_pic from "../images/project_pics/language_ai_app1.jpg";

export const Categories = {
        ALL: "All",
        REACT: "React",
        CPP: "C++",
        GO: "Go",
        PYTHON: "Python",
        UNITY: "Unity"
};

const TaskManager = {
        category: Categories.REACT,
        image: taskManagerFront,
        title: "Task Manager Full-Stack Web App ",
        skills: ["MERN Stack", "Full-stack", "CSS",],
        description: `
    Designed and developed a comprehensive full-stack MERN task management application aimed at boosting users’
productivity by allowing users to create, customize and organize their tasks.
    `,
        link: "https://github.com/sirfist19/Task-Manager-App",
};
const BudgetApp =
{
        category: Categories.REACT,
        image: budgetFront,
        title: "Budget Full-Stack Mobile App",
        skills: ["React Native", "MERN Stack", "Full-stack"],
        description: `A budgeting app that allows users to efficiently create and track their progress 
        towards budgets. Features advanced data visualization through interactive graphs so users 
        can pinpoint where they are overspending.`,
        link: ""
};

const MexicanRestaurantWebsite = {
        category: Categories.REACT,
        image: elTacoLlamaFront,
        title: "Mexican Restaurant Website",
        skills: ["React", "Frontend"],
        description: `A frontend website built in React for a local mexican restaurant. 
        View store hours, the menu, locations, and pictures of delicious food!`,
        link: ""
};
const RandomizedDungeon =
{
        category: Categories.CPP,
        image: randomDungeonFront,
        title: "Random Dungeon Game",
        skills: ["C++", "OOP"],
        description: "A randomized text dungeon game inspired by text games from the 1970s like Zork.",
        link: "https://github.com/sirfist19/Randomized_Text_Dungeon",
};
const SurrenderTheCore =
{
        category: Categories.UNITY,
        image: surrenderCoreFront,
        title: "Surrender the Core - Bullet Hell Video Game",
        skills: ["Unity", "C#"],
        description: `Led a team of 9 engineers with UCLA’s ACM Game Studio club to create a fully-playable bullet-hell game using
        the Unity Game Engine and C# within a 72-hour period for the Ludum Dare Game Jam. 
        `,
        link: "https://ldjam.com/events/ludum-dare/48/surrender-the-core-a-roguelike"
}

const Zelda2D =
{
        category: Categories.PYTHON,
        image: zeldaFront,
        title: "Zelda-Style Dungeon Crawler 2D Game",
        skills: ["Python", "Pygame"],
        description: `A 2D top-down Zelda-like dungeon game in Pygame. This includes a moveable character, enemies, rooms, and items such as keys, hearts, and gold. Navigate the dungeon and defeat the boss at the end of the dungeon!`,
        link: "https://github.com/sirfist19/Zelda-Dungeon-Game"
}

const ChessGame =
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
}

const ChessTreeVisualizer =
{
        category: Categories.GO,
        image: chess_visualizer_pic, 
        title: "Chess Tree Visualizer",
        skills: ["Go", "PostgreSQL", "React", "Docker"],
        description: `An interactive tool that visualizes chess opening repertoires as dynamic tree diagrams. 
    Built with a Go REST API backed by PostgreSQL to generate and query opening trees from PGN data.
    Integrated the Lichess API for player games and analysis.`,
        link: ""
}

const AI_Flashcards =
{
        category: Categories.REACT,
        image: language_ai_app_pic, 
        title: "Language Learning AI Flashcard App",
        skills: ["MERN Stack", "OpenAI API", "TypeScript", "Docker"],
        description: `An AI-powered flashcard app that generates vocabulary cards from foreign-language texts using an LLM.
    Cards are rich with context data including example sentences, synonyms, and etymology.
    Used a Spaced Repetition (SRS) algorithm for efficient review and retention.`,
        link: ""
}

export const ALL_PROJECTS = {
        ChessTreeVisualizer,
        AI_Flashcards,
        TaskManager,
        Zelda2D,
        RandomizedDungeon,
        SurrenderTheCore,
        BudgetApp,
        MexicanRestaurantWebsite,
        ChessGame,
};