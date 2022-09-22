import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

import SkillsPrev from './components/SkillsPrev';
import ProjectsPrev from './components/ProjectsPrev';
import BlogsPrev from './components/BlogsPrev';
import ContactPrev from './components/ContactPrev';

function App() {
  return (
      <div>
        
        <Main />
        <ProjectsPrev />
        <BlogsPrev/>
        <SkillsPrev/>
        <ContactPrev/>
      </div>
    
  );
}

export default App;
