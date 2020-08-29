import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Header from './Header'
import Bio from './Bio'
import Hobbies from './Hobbies'
import Education from './Education'


function About() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const breakpoint = 640
    const adjustScale = width > breakpoint ? { 'transform': 'scale(1)' } : { 'transform': 'scale(.8)' }
    return (
        <div className="About" style={adjustScale}>
            <Helmet>
                <title>About | Steven Boutcher</title>
            </Helmet>
            <Navbar currentPage="About" />
            <Header title="STEVEN BOUTCHER" subtitle="Self-Taught Full Stack Developer" />
            <Bio />
            <Hobbies />
            <Education />
        </div>
    );
}

export default About