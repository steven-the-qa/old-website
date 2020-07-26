import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="About">
                <Helmet>
                    <title>About Steven Boutcher</title>
                </Helmet>
                <Navbar />
                <h1>Steven Boutcher</h1>
                <h3>Full Stack Developer</h3>
            </div>
        );
    }
}

export default Home