import React from 'react'
import image from './web logos/developer.svg'

import { Link } from 'react-router-dom'
const Main = () => {
    return (
            <main className='prevsblock' id='mainblock'>
                <div className="introsection">
                    <h1>Hi there!</h1>
                    <h2>I'am Ganpat Hada a web developer</h2>
                    <p>Final year BCA Hons. student at DAVV Indore</p>
                    <Link to="/about"><button className='primarybtn'>Know more</button></Link>
                </div>
                <div className='imagesection'>
                    <img src={image} alt="" />
                </div>
            </main>
            
    )
}

export default Main