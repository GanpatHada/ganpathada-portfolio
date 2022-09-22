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
            <main className='prevsblock' id='mainblock'>
                <div className="introsection">
                    <h1>Hi there!</h1>
                    <h2>I'am Ganpat Hada a full stack web developer</h2>
                    <p>Hey, glad to see you here! I am a 4th year BCA Hons. student at DAVV, Indore
                        . I am a full stack web developer

                    </p>
                    <button id='download_cv' className='primarybtn'>Download CV</button>
                </div>
                <div className='imagesection'>
                    <img src={image} alt="" />
                </div>
            </main>
            
    )
}

export default Main