import React from 'react'

const ProjectsList = ({ title, mark, desc, live, source }) => {
  return (
    <a target='_black' href={live}>
      <h2>{title}</h2>
      <h4>{mark}</h4>
      <p>{desc}</p>
      <div>
        <a target='_blank' href={live}><button style={{ height: "40px", width: "120px" }} className='primarybtn'>live Project</button></a>&nbsp;
        <a target='_blank' href={source}><button style={{ height: "40px", width: "120px" }} className='secondarybtn'>source code</button></a>
      </div>
    </a>
  )
}

export default ProjectsList