import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'; // Adjust path as needed
import Home from '../src/Pages/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> {/* Wrap routes with Layout */}
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
