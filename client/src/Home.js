import React from 'react'
import Navbar from './Navbar'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="Home">
                <Navbar />
                <h1>Steven Boutcher</h1>
                <h2>Full Stack Developer</h2>
            </div>
        );
    }
}

export default Home