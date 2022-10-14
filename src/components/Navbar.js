import React, { useState } from 'react'
import { NavLink, useLocation, } from 'react-router-dom'
const Navbar = () => {
  const [mode, setmode] = useState("light");
  const loc = useLocation();
  const location = loc.pathname;
  const [transform, settransform] = useState("-250px")
  const [display, setdisplay] = useState("none")
  const closeSidebar = () => {
    setdisplay("none");
    settransform("-250px");
  }
  const changemode = () => {
    if (mode === 'dark')
      setmode("light");
    else
      setmode('dark');
    if (mode === 'light') {
      document.documentElement.style.setProperty('--bg1', '#181818');
      document.documentElement.style.setProperty('--bg2', '#181818');
      document.documentElement.style.setProperty('--secondarycolor', 'whitesmoke');
      document.documentElement.style.setProperty('--tertiarycolor', 'lightgrey');
      document.documentElement.style.setProperty('--card', '#7c7c7c0d');
      document.documentElement.style.setProperty('--footerside', '#141414');
      document.documentElement.style.setProperty('--navbg', '#141414');
      document.documentElement.style.setProperty('--btn2', '#bfbfbf1a');
      document.documentElement.style.setProperty('--shadow', '#141414');

    }
    else {

      document.documentElement.style.setProperty('--bg1', 'white');
      document.documentElement.style.setProperty('--bg2', '#ededed');
      document.documentElement.style.setProperty('--secondarycolor', 'black');
      document.documentElement.style.setProperty('--tertiarycolor', '#1b1b1b');
      document.documentElement.style.setProperty('--card', 'white');
      document.documentElement.style.setProperty('--navbg', 'white');
      document.documentElement.style.setProperty('--footerside', 'orangered');
      document.documentElement.style.setProperty('--btn2', 'rgba(255, 68, 0, 0.185)');
      document.documentElement.style.setProperty('--shadow', 'rgba(185, 185, 185, 0.432)');
    }
  }
  const sidenavs = document.querySelectorAll(".sidenavs");
  sidenavs.forEach(e => {
    e.addEventListener("click", closeSidebar)
  })
  return (
    <nav style={{ boxShadow: (mode === 'light' ? 'rgba(0, 0, 0, 0.1) 0px 4px 12px' : 'none') }}>
      <div id="title">
        <a href="/">Gh</a>
      </div>
      <div id="navs">
        <ul>
          <li id='home'><NavLink style={{ color: (location === '/' && "orangered") }} to="/">Home</NavLink></li>
          <li id='about'><NavLink style={{ color: (location === '/about' && "orangered") }} to="/about">About</NavLink></li>
          <li id='blogs'><NavLink style={{ color: (location === '/blogs' && "orangered") }} to="/blogs">Blogs</NavLink></li>
          <li id='projects'><NavLink style={{ color: (location === '/projects' && "orangered") }} to="/projects">Projects</NavLink></li>
          <li id='contact'><NavLink style={{ color: (location === '/contact' && "orangered") }} to="/contact">Contact</NavLink></li>
          <div id="navback"></div>


        </ul>

      </div>
      <div>
        <i title={`${mode} mode enabled`} className={(mode === 'dark') ? 'fa-solid fa-sun' : 'fa-sharp fa-solid fa-moon'} onClick={changemode} id='mode'></i>
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
        <i id='menuicon' className="fa-solid fa-bars" onClick={() => {
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