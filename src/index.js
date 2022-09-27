import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Blogs from './components/Blogs';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    
      <Navbar />
      <Routes>
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<App />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/" element={<App />} />
    </Routes>
      <Footer />
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
