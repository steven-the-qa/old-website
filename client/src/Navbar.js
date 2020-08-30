import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props){
    super()
    this.state = {
      currentPage: props.currentPage
    }
  }

  render() {
    const currentPageStyles = {
      'borderBottom': '1px solid var(--lightgray)',
      'paddingBottom': '.1em'
    }

    const normalPageStyles = {
      'borderBottom': 'none',
      'paddingBottom': '0'
    }

    return (
      <div className="Navbar">
        <Link 
          style={this.state.currentPage === 'About' ? currentPageStyles : normalPageStyles} 
          to='/about' 
          className='btn-about'>
          ABOUT
        </Link>
        <Link 
          style={this.state.currentPage === 'Projects' ? currentPageStyles : normalPageStyles} 
          to='/projects' 
          className='btn-projects'>
          PROJECTS
        </Link>
        <Link 
          style={this.state.currentPage === 'Contact' ? currentPageStyles : normalPageStyles} 
          to='/contact' 
          className='btn-contact'>
          CONTACT
        </Link>
        <a
          style={this.props.currentPage === 'Blog' ? currentPageStyles : normalPageStyles} 
          href="https://blog.stevenboutcher.com"
          target="_blank"
          rel="noopener noreferrer"
          className='btn-blog'>
          BLOG
        </a>
      </div>
    );
  }
}

export default Navbar;
