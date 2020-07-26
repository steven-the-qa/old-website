import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="Navbar">
        
        <Link to="/" className="home-button">
            Home
        </Link>
        <Link to="/blog" className="blog-button">
            Blog
        </Link>
      </div>
    );
  }
}

export default Navbar;
