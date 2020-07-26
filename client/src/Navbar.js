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
        <Link to="/" className="btn-about">
            About
        </Link>
        <Link to="/blog" className="btn-blog">
            Blog
        </Link>
      </div>
    );
  }
}

export default Navbar;
