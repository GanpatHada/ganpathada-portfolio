import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import SkillsPrev from './components/SkillsPrev';
import ProjectsPrev from './components/ProjectsPrev';
import BlogsPrev from './components/BlogsPrev';
import ContactPrev from './components/ContactPrev';
import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
function App() {
  const location = useLocation();
  const scrolltoref = useRef(null);
  useEffect(() => {
    if (location.pathname === '/contact') {
      scrolltoref.current.scrollIntoView({ behavior: 'smooth' });
    }
    else{
      window.scrollTo(0, 0);
    }
  }, [location.pathname])

  return (
    <div>
      <Main />
      <SkillsPrev />
      <ProjectsPrev />
      <BlogsPrev />
      <ContactPrev scroll={scrolltoref} />
    </div>

  );
}

export default App;
