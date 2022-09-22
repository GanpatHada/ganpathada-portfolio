import React from "react";
import react from './web logos/react.webp'
import html from './web logos/html.png'
import css from './web logos/css.png'
import js from './web logos/js.png'
import figma from './web logos/fig1.png'
import bootstrap from './web logos/bootstrap.png'
import node1 from './web logos/node1.png'
import ts from './web logos/Ts.png'
import fire from './web logos/firebase.png'
import mdb from './web logos/mdb.webp'
import exp from './web logos/express.png'
const SkillsPrev = () => {
    return (
        <div id="skillsprev">
            <h2>Skills</h2>
            <div><img src={react} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img style={{backgroundColor:"black",borderRadius:"3px"}} src={figma} alt="" />
                <img src={bootstrap} alt="" />
                <img src={node1} alt="" />
                <img  src={ts} alt="" />
                <img  src={fire} alt="" />
                <img  src={mdb} alt="" />
                <img  src={exp} alt="" />
                
            </div>
            

        </div>
    )
}
export default SkillsPrev;