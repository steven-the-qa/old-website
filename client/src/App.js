import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Landing from './Landing'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
//import Blog from './Blog'

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
            <Route path="/about" component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            {/*<Route path="/blog" component={Blog} />*/}
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
    );
  }
}

export default App;
