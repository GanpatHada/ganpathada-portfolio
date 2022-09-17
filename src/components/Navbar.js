import React from 'react'
import { a } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div id="title">
            <h1>Ganpat Hada</h1>
        </div>
        <div id="navs">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar