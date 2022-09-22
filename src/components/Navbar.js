import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import mainlogo from './web logos/mainlogo.png'
const Navbar = () => {
  const [transform, settransform] = useState("-250px")
  const [display, setdisplay] = useState("none")
  const closeSidebar=()=>{
    setdisplay("none");
    settransform("-250px");
  }
  const sidenavs=document.querySelectorAll(".sidenavs");
  sidenavs.forEach(e=>{
    e.addEventListener("click",closeSidebar)
  })
  return (
    <nav>
        <div id="title">
            <a href="/"><img src={mainlogo} height="35px" alt="" /></a>
        </div>
        <div id="navs">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Skills</NavLink></li>
                <li><NavLink to="/">Blogs</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/">Contact</NavLink></li>
                
            </ul>
        </div>
        <aside style={{transform:`translateX(${transform})`}}>
        <i className="fa-solid fa-xmark" id='cross' onClick={closeSidebar}></i> 

        <ul>
                <li><NavLink className="sidenavs" to="/">Home</NavLink></li>
                <li><NavLink className="sidenavs" to="/">Skills</NavLink></li>
                <li><NavLink className="sidenavs" to="/">Blogs</NavLink></li>
                <li><NavLink className="sidenavs" to="/projects">Projects</NavLink></li>
                <li><NavLink className="sidenavs" to="/">Contact</NavLink></li>
                
        </ul>
        </aside> 
        <div id="menu">
        <i className="fa-solid fa-bars" onClick={()=>{
          setdisplay("block");
          settransform("0px");}}></i>
        </div>
        <div id="wrapper" style={{display}}>

        </div>
    </nav>
  )
}

export default Navbar