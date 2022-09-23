import React from 'react'
import ProjectsList from './ProjectsList'
import Projectsdetails from './ProjectsDetails'
const Projects = () => {
  return (
    <div id='projects'>
      <h1>Projects</h1>
      <div id="cards">
        {
          Projectsdetails.map((p,index)=>{
            return(
              <ProjectsList key={index} title={p.title} mark={p.mark} desc={p.desc} live={p.live} source={p.source}/>
            )
          })
        }  
      </div>
    </div>
  )
}

export default Projects