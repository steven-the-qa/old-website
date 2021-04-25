import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Landing from './landing/Landing'
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

export default function App() {

    return (
        <Router>   
          <Switch>
            <Route path="/about" component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
    );
}