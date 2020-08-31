import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Header from './Header'
import Bio from './Bio'
import Hobbies from './Hobbies'
import Education from './Education'
import CertificatesNav from './CertificatesNav'
import ImageWindow from './ImageWindow'
import DescriptionWindow from './DescriptionWindow'

function About() {

    return (
        <div className="About">
            <Helmet>
                <title>About | Steven Boutcher</title>
            </Helmet>
            <Navbar currentPage="About" />
            <Header title="STEVEN BOUTCHER" subtitle="Self-Taught Full Stack Developer" isAbout={true}/>
            <Bio />
            <Hobbies />
            <Education />
            <CertificatesNav />
            <div className='certificates'>
                <ImageWindow />
                <DescriptionWindow />
            </div>
        </div>
    );
}

export default About