import React from 'react'
import image from './web logos/developer.svg'

import { Link } from 'react-router-dom'
const Main = () => {
    return (
            <main className='prevsblock' id='mainblock'>
                <div className="introsection">
                    <h2>Hi there !</h2>
                    <h2>I'am Ganpat Hada a <span>web developer</span></h2>
                    <p>Final year BCA Hons. student at DAVV Indore,currently exploring Typescript and figma</p>
                    <Link to="/about"><button className='primarybtn'>Know more</button></Link>
                </div>
                <div className='imagesection'>
                    <img src={image} alt="" />
                </div>
            </main>
            
    )
}

export default Main