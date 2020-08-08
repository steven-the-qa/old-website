import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

class About extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="About">
                <Helmet>
                    <title>About | Steven Boutcher</title>
                </Helmet>
                <Navbar currentPage="About" />
                <div className='pageHeader'>
                    <h1>STEVEN BOUTCHER</h1>
                    <h3>Self-Taught Full Stack Developer</h3>
                </div>
            </div>
        );
    }
}

export default About