import React from 'react'
import image from './web logos/developer.svg'

import { Link } from 'react-router-dom'
const Main = () => {
    return (
            <main className='prevsblock' id='mainblock'>
                <div className="introsection">
                    <h1>Hi there!</h1>
                    <h2>I'am Ganpat Hada a full stack web developer</h2>
                    <p>Hey, glad to see you here! I am a 4th year BCA Hons. student at DAVV, Indore
                        . I am a full stack web developer

                    </p>
                    <Link to="/about"><button className='primarybtn'>Know more</button></Link>
                </div>
                <div className='imagesection'>
                    <img src={image} alt="" />
                </div>
            </main>
            
    )
}

export default Main