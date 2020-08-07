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
      'border-bottom': '1px solid #E5E5E5',
      'padding-bottom': '.1em'
    }

    const normalPageStyles = {
      'border-bottom': 'none',
      'padding-bottom': '0'
    }

    return (
      <div className="Navbar">
        <Link style={this.state.currentPage === 'About' ? currentPageStyles : normalPageStyles} to='/about' className='btn-about'>
          ABOUT
        </Link>
        <Link style={this.state.currentPage === 'Projects' ? currentPageStyles : normalPageStyles} to='/projects' className='btn-projects'>
          PROJECTS
        </Link>
        <Link style={this.state.currentPage === 'Contact' ? currentPageStyles : normalPageStyles} to='/contact' className='btn-contact'>
          CONTACT
        </Link>
        {/*<Link style={this.props.currentPage === 'Blog' && currentPageStyles} to='/blog' className='btn-blog'>
            BLOG
        </Link>*/}
      </div>
    );
  }
}

export default Navbar;
