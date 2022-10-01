import React, { useState } from 'react'
import { NavLink, useLocation, } from 'react-router-dom'
const Navbar = () => {

  const loc=useLocation();
  const location=loc.pathname;
  const [transform, settransform] = useState("-250px")
  const [display, setdisplay] = useState("none")
  const closeSidebar = () => {
    setdisplay("none");
    settransform("-250px");
  }
  const sidenavs = document.querySelectorAll(".sidenavs");
  sidenavs.forEach(e => {
    e.addEventListener("click", closeSidebar)
  })
  return (
    <nav>
      <div id="title">
        <a href="/">Gh</a>
      </div>
      <div id="navs">
        <ul>
          <li><NavLink style={{color:(location==='/'&&"orangered")}} to="/">Home</NavLink></li>
          <li><NavLink style={{color:(location==='/about'&&"orangered")}}to="/about">About</NavLink></li>
          <li><NavLink style={{color:(location==='/blogs'&&"orangered")}} to="/blogs">Blogs</NavLink></li>
          <li><NavLink style={{color:(location==='/projects'&&"orangered")}} to="/projects">Projects</NavLink></li>
          <li><NavLink style={{color:(location==='/contact'&&"orangered")}} to="/contact">Contact</NavLink></li>

        </ul>
      </div>
      <aside style={{ transform: `translateX(${transform})` }}>
        <div id="asidenav">
          <a href="/">Gh</a>
          <i className="fa-solid fa-xmark" id='cross' onClick={closeSidebar}></i>
        </div>
        <ul>
          <li><NavLink className="sidenavs" to="/">Home</NavLink></li>
          <li><NavLink className="sidenavs" to="/about">About</NavLink></li>
          <li><NavLink className="sidenavs" to="/blogs">Blogs</NavLink></li>
          <li><NavLink className="sidenavs" to="/projects">Projects</NavLink></li>
          <li><NavLink className="sidenavs" to="/contact">Contact</NavLink></li>

        </ul>

      </aside>
      <div id="menu">
        <i className="fa-solid fa-bars" onClick={() => {
          setdisplay("block");
          settransform("0px");
        }}></i>
      </div>
      <div id="wrapper" style={{ display }} onClick={closeSidebar}>

      </div>
    </nav>
  )
}

export default Navbar