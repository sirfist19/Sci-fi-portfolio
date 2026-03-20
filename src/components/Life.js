import React from 'react'
import badlandsSunset from '../images/life_pics/badlandsSunset.jpg'
import sicilianDragon from '../images/life_pics/sicilianDragon.png'
import operaGame from '../images/life_pics/operaGame.png'
import ftlFlagship from '../images/life_pics/ftl_flagship.png'
import mountainGoat from '../images/life_pics/mountain_goat.png'


const Life = () => {
    return (
        <>
            <div id="life">
                <h1 className="section-title">Life & Hobbies</h1>
                <div className="title-underline" />

                <p className="life-intro">
                    I love to learn and am relentlessly curious. Which is maybe why I have so many different hobbies.
                    I love to play and study chess, learn foreign languages (and I suppose new coding languages too!),
                    explore nature and national parks, travel to new cities, try new cuisines, work out, play pickleball,
                    watch science fiction and fantasy, collect pokemon cards, and play video games (especially indie and Nintendo games).
                </p>

                <div className="life-container">
                    <div className="life-text">
                        <h2>Philosophies & Sayings</h2>
                        <ul className="quote-list">
                            <li>
                                "好好学习天天向上" - Mao Ze Dong
                                <br /><span className="quote-subtext">Study well everyday and you will head towards greatness. (My translation)</span>
                            </li>
                            <li>"Three can keep a secret if two of them are dead."</li>
                            <li>"Don’t forget to stop and smell the roses."</li>
                            <li>"An idiot with a plan can beat a genius without one." - Warren Buffet</li>
                            <li>"It is possible to commit no errors and still lose. That is not weakness. That is life." - Picard</li>
                            <li>"Do or do not. There is no try." - Yoda</li>
                            <li>"Never tell me the odds." - Han Solo</li>
                            <li>"I wish it need not have happened in my time," said Frodo. "So do I," said Gandalf, "and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given to us." - JRR Tolkien, Lord of the Rings</li>
                            <li>"Once men turned their thinking over to machines in the hope that this would set them free. But that only permitted other men with machines to enslave them." - Frank Herbert, Dune</li>
                            <li>"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain." - Frank Herbert, Dune</li>
                            <li>"Into the forest I go, to lose my mind and find my soul." - John Muir</li>
                        </ul>
                    </div>

                    
                    
                </div>
            </div>
            <div id="life">
                <div className="life-container">
                    <div className="life-text">
                        <h2>Things That Are "Very Me"</h2>
                        <div className="gallery-grid">
                                <div className="gallery-item">
                                <img src={badlandsSunset} alt="Badlands at sunset" className="gallery-image" />
                                <p className="gallery-caption">Badlands at sunset</p>
                                </div>

                                <div className="gallery-item">
                                <img src={sicilianDragon} alt="Sicilian dragon position" className="gallery-image" />
                                <p className="gallery-caption">Sicilian dragon position (my favorite chess opening)</p>
                                </div>

                                <div className="gallery-item">
                                <img src={operaGame} alt="The final position of the Opera game" className="gallery-image" />
                                <p className="gallery-caption">White to move and win! Can you find the move? - From the famous Paul Morphy Opera Game</p>
                                </div>

                                <div className="gallery-item">
                                <img src={ftlFlagship} alt="FTL screenshot fighting the boss" className="gallery-image" />
                                <p className="gallery-caption">FTL screenshot fighting the boss (my favorite game... probably)</p>
                                </div>

                                <div className="gallery-item">
                                <img src={mountainGoat} alt="Mountain goat on the Going to the Sun road at Glacier National Park" className="gallery-image" />
                                <p className="gallery-caption">Mountain goat at Glacier</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Life;
