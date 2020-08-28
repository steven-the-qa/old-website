import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import { Helmet } from 'react-helmet'
import selfie from './selfie.jpg'

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
                <div className="bio">
                    <img className='bio-pic' src={selfie} />
                    <div className='bio-description'>
                        <h1>Hi! I'm Steven!</h1>
                        <p>
                        I’ve spent 3 years learning full-stack JavaScript and responsive UI design in my spare time. 
                        I studied Spanish Education in college thinking I was putting my language learning aptitude to the best use, 
                        but I’ve found myself much more excited by using programming languages to build cool web applications.
                        </p>
                        <p>
                        As a QA Analyst, I’m always looking for ways to use my web skills to benefit the team, even if it’s just noticing UI bugs others may miss.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About