import React from 'react'

import Crafts from './ArtSampleImages/Crafts.png';
import Digital from './ArtSampleImages/Digital.png';
import Midjourney from './ArtSampleImages/Midjourney.png';
import MiniPainting from './ArtSampleImages/MiniPainting.png';
import Traditional from './ArtSampleImages/Traditional.png';

import './Art.scss';

export const Art = () => {

    const artTypes = [
        {
            id: 1,
            name: "Crafts",
            img: Crafts,
            altTest: "An image of a handmade mug with whales and text on it",
            description: "From mugs, resin, shrinky dink, and more, I dabble in a lot of different types of crafts!"
        },
        {
            id: 2,
            name: "Digital",
            img: Digital,
            altText: "A digitally painted rendition of a Z series Datsun from the early 70s",
            description: "My primary digital tool of choice is Krita and while I love the freedom, I sometimes get too OCD to do too many digital paintings"
        },
        {
            id: 3,
            name: "Midjourney",
            img: Midjourney,
            altText: "An image of a fall inspired witch, roses and rose color",
            description: "I will write my opinions on AI in my upcoming blog, but it's so much fun for me to play with and explore."
        },
        {
            id: 4,
            name: "Miniature Painting",
            img: MiniPainting,
            altText: "A photo of a painted fantasy wizard in greys and teals",
            description: "There are times when I prefer the painting to the games the minis are for...from Warhammer to D&D to busts to monsters, I love to paint them all."
        },
        {
            id: 5,
            name: "Traditional",
            img: Traditional,
            altText: "A watercolor painting of a woman in a ballerina pose, her dress becoming a part of the cosmos",
            description: "While this is the medium I go back to the least nowadays, it's my roots, where I started, and when I have the time and patience, I love to revisit it.  My biggest problem has been transfering them to a digital format!"
        }
    ]

    return (
        <div className="art-wrapper right-indent" id="#art">
            <h3 className="section-headers">
                Art
            </h3>
            <div className="art-descriptive-container">
                <p>
                    I partake in many different types of art! 
                    Everything is shiny and I want to create most any and everything.  
                    I do it for fun, for potential profit, and because if I don't, I get upset for not creating things! None of these reasons is the single reason and none of them are the best.  
                    Eventually, these will each lead to galleries for each type of art.
                    (For now, hover to zoom!)
                </p>
            </div>
            <div className="preview-containers">
                {artTypes.map((artType)=>(
                    <div className="each-art-type" key={`each-section-${artType.id}`}>
                        <h6>{artType.name}</h6>
                        <img src={artType.img} alt={artType.altText} />
                        <p className="description-text">
                            {artType.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
