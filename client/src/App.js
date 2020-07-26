import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import About from './About'
import Blog from './Blog'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    return (
        <Router>      
          <Switch>          
            <Route path="/blog" component={Blog} />
            <Route path="/" component={About} />
          </Switch>
        </Router>
    );
  }
}

export default App;
