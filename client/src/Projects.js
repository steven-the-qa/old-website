import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
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
                <Header title="PROJECTS" />
            </div>
        );
    }
}

export default Projects