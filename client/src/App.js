import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Landing from './Landing'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

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