import React from 'react'

const Life = () => {
    return (
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

                <div className="life-images">
                    <h2>Things That Are "Very Me"</h2>
                    <div className="gallery-grid">
                        <div className="placeholder-image">Badlands at sunset</div>
                        <div className="placeholder-image">Sicilian dragon position (my favorite chess opening)</div>
                        <div className="placeholder-image">The final position of the Opera game</div>
                        <div className="placeholder-image">FTL screenshot fighting the boss (my favorite game … probably)</div>
                        <div className="placeholder-image">Moose at Glacier</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Life;
