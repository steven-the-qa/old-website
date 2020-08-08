import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="Projects">
                <Helmet>
                    <title>Projects | Steven Boutcher</title>
                </Helmet>
                <Navbar currentPage="Projects" />
                <div className='pageHeader'>
                    <h1>PROJECTS</h1>
                </div>
            </div>
        );
    }
}

export default Projects