import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Navbar'
import Header from '../Header'
import Bio from './Bio'
import Hobbies from './Hobbies'
import Education from './Education'
import Certificates from './Certificates'
import FCCProjects from './FCCProjects'

function About() {

    return (
        <div className="About">
            <Helmet>
                <title>About | Steven Boutcher</title>
            </Helmet>
            <Navbar currentPage="About" />
            <Header title="STEVEN BOUTCHER" subtitle="Human | SDET | FE Engineer, Apprentice" isAbout={true}/>
            <Bio />
            <Hobbies />
            <Education />
            <Certificates />
            <FCCProjects />
        </div>
    );
}

export default About