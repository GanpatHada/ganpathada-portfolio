import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import SkillsPrev from './components/SkillsPrev';
import ProjectsPrev from './components/ProjectsPrev';
import BlogsPrev from './components/BlogsPrev';
import ContactPrev from './components/ContactPrev';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <ProjectsPrev />
        <BlogsPrev/>
        <SkillsPrev/>
        <ContactPrev/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
