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
import github from './web logos/github.png'
const SkillsPrev = () => {
    return (
        <div id="skillsprev" className="prevsblock">
              
            <h2>Skills & <span>Technologies</span></h2>
            <div>
                <div className="wrapperimage">
                      <img src={react} alt="" />
                </div>
                <div className="wrapperimage">
                      <img src={html} alt="" />
                </div>
                <div className="wrapperimage">
                      <img src={css} alt="" />
                </div>
                <div className="wrapperimage">
                      <img src={js} alt="" />
                </div>
                <div className="wrapperimage">
                      <img src={figma} alt="" />
                </div>
                <div className="wrapperimage">
                      <img src={bootstrap} alt="" />
                </div>
                <div className="wrapperimage">
                      <img src={node1} alt="" />
                </div>
                <div className="wrapperimage">
                      <img src={ts} alt="" />
                </div>   
                <div className="wrapperimage">
                      <img src={mdb} alt="" />
                </div>   
                <div className="wrapperimage">
                      <img src={exp} alt="" />
                </div>   
                <div className="wrapperimage">
                      <img src={fire} alt="" />
                </div>   
                <div className="wrapperimage">
                      <img src={github} alt="" />
                </div>   
            </div>
            

        </div>
    )
}
export default SkillsPrev;