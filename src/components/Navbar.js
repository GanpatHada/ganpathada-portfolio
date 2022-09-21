import React from 'react'
import { a } from 'react-router-dom'
import mainlogo from './web logos/mainlogo.png'
const Navbar = () => {
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
        <div id="menu">
        <i class="fa-solid fa-bars"></i>
        </div>
    </nav>
  )
}

export default Navbar