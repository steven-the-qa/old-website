import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Header from './Header'
import Bio from './Bio'
import Hobbies from './Hobbies'


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
                <Header title="STEVEN BOUTCHER" subtitle="Self-Taught Full Stack Developer" />
                <Bio />
                <Hobbies />
            </div>
        );
    }
}

export default About