import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home'
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
            <Route path="/" component={Home} />
          </Switch>
        </Router>
    );
  }
}

export default App;
