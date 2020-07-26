import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      blogTitle: ''
    }
    this.getBlogTitle = this.getBlogTitle.bind(this)
  }

  componentDidMount() {
    this.getBlogTitle()
  }

  getBlogTitle() {
    fetch('/api/blog')
    .then(res => res.json())
    .then(data => this.setState({
      blogTitle: data.blogTitle
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.blogTitle}</h1>
      </div>
    );
  }
}

export default App;
