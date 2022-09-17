import React from 'react'
import image from './devimage.svg'
import html from './web logos/html.png'
import css from './web logos/css.png'
import js from './web logos/js.png'
import react from './web logos/react.webp'
import github from './web logos/github.png'
import java from './web logos/java.webp'
import project from './web logos/projects.svg'
import blogs from './web logos/blogs.svg'
import contact from './web logos/contact.svg'
const Main = () => {
    return (
        <>
            <main>
                <div id="introsection">
                    <h1>Hi there!</h1>
                    <h2>I'am Ganpat Hada a full stack web developer</h2>
                    <p>Hey, glad to see you here! I am a 4th year BCA Hons. student at DAVV, Indore
                        . I am a full stack web developer

                    </p>
                    <button id='download_cv' className='primarybtn'>Download CV</button>
                </div>
                <div id="imagesection">
                    <img src={image} alt="" />
                </div>
            </main>
            <div id="about">
                <h2 className='sec-headings'>About Me</h2>
                <p>I am a Full stack Developer and Designer. I have been working on the full stack for about 3 months in this span I have developed multiple projects which helped me to enhance my skills. Yes, having your strong base really helps and hence I am open to adapting to whichever framework is required. <br /> While I was working on different tech stacks, to give a kick start to my career I also did some freelancing work

                    <a href="/"> Learn more..</a> </p>
            </div>

            <div id="skills">
                <h2 className='sec-headings'>Skills</h2>
                <div>
                    <img src={html} alt=".." />
                    <img src={css} alt="" />
                    <img src={js} alt=".." />
                    <img src={react} alt=".." />
                    <img src={github} alt=".." />
                    <img src={java} alt=".." />
                </div>

            </div>
            <div id="projects">
                <h2 className='sec-headings'>Projects</h2>
                <div>
                    <div style={{ width: "50%" }} >
                        <img src={project} alt="" />
                    </div>
                    <div className='briefnavs' style={{ width: "50%" }}>
                        <p>Here I have listed some of my Web-Development projects which I have hosted online along with their source code.</p>
                        <button className='primarybtn'>See Projects</button>
                    </div>
                </div>
            </div>
            <div id="blogs">
                <h2 className='sec-headings'>Blogs</h2>
                <div>
                    <div className='briefnavs' style={{ width: "50%" }}>
                        <p>Here I have listed some of my Blogs which I have written in my web developer journey.</p>
                        <button className='primarybtn'>Explore blogs</button>
                    </div>
                    <div style={{ width: "50%" }} >
                        <img src={blogs} alt="" />
                    </div>
                </div>
            </div>
            <div id="contact">
                <h2 className='sec-headings'>Contact Me</h2>
                <div>
                    <div style={{ width: "50%" }} >
                        <img src={contact} alt="" />
                    </div>
                    <div className='briefnavs' style={{ width: "50%" }}>
                        <p>I'd love to hear about what you're working on and how I could help. I'm also open to discussing ideas and doing a project together. Drop me a mail or DM me on LinkedIn and let's have a talk.
                            Feel free to drop a message</p>
                        <button className='primarybtn'>Linked in</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main