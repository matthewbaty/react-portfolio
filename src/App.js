import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Resume from './pages/resume';

import projects from './data/projects'

import './styles/style.css'

function App() {
  return (
    <Router>
        <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
        <Footer />
    </Router>
  );
};

export default App;