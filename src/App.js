import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Landing from './landing/Landing'
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

export default function App() {

    return (
        <Router>   
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    );
}