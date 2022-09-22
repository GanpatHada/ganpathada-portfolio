import React, { useState } from 'react'
import { a } from 'react-router-dom'
import mainlogo from './web logos/mainlogo.png'
const Navbar = () => {
  const [transform, settransform] = useState("-200px")
  const [display, setdisplay] = useState("none")
  return (
    <nav>
        <div id="title">
            <a href="/"><img src={mainlogo} height="35px" alt="" /></a>
        </div>
        <div id="navs">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
                
            </ul>
        </div>
        <aside style={{transform:`translateX(${transform})`}}>
        <i class="fa-solid fa-xmark" id='cross' onClick={()=>{
          setdisplay("none");
          settransform("-200px");}}></i> 

        <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
                
        </ul>
        </aside> 
        <div id="menu">
        <i class="fa-solid fa-bars" onClick={()=>{
          setdisplay("block");
          settransform("0px");}}></i>
        </div>
        <div id="wrapper" style={{display}}>

        </div>
    </nav>
  )
}

export default Navbar