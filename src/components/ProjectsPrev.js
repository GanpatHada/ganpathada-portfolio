import React from 'react'
import { Link } from 'react-router-dom'
import projects from './web logos/projects.svg'
const ProjectsPrev = () => {
    return (
       
        <div className='prevsblock' id='projectprev'>
            <div className='imagesection'>
                <img src={projects} alt="" />
            </div>
            <div className="introsection">
                <h2>Projects</h2>
                <p>Here I have listed some of my Technical blogs which I have hosted online along with their source code.
                </p>
                <Link to="/projects"> <button className='primarybtn'>see projects</button></Link>
            </div>
        </div>
        
    )
}

export default ProjectsPrev