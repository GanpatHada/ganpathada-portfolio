import React from 'react'
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
                <button id='download_cv' className='primarybtn'>see projects</button>
            </div>
        </div>
        
    )
}

export default ProjectsPrev