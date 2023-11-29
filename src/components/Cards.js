import React, {useState, useEffect} from 'react'
import Card from "./Card";

import { Categories, ALL_PROJECTS } from '../data/projects';

const Cards = () => {
    const allCardInfo = ALL_PROJECTS;
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
