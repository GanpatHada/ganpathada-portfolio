import React from "react";
import react from './web logos/react.webp'
import html from './web logos/html.png'
import css from './web logos/css.png'
import js from './web logos/js.png'
import java from './web logos/java.webp'
import figma from './web logos/figma.png'

const SkillsPrev = () => {
    return (
        <div id="skillsprev">
            <h2>Skills</h2>
            <div><img src={react} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={java} alt="" />
                <img src={figma} alt="" />
            </div>

        </div>
    )
}
export default SkillsPrev;