import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <Link to='/about' className='Landing'>
                    <Helmet>
                        <title>Welcome! | Steven Boutcher</title>
                    </Helmet>
                    <h1>Hello :) My name is Steven. Welcome to my website!</h1>
                    <h3>Click anywhere to continue...</h3>
            </Link>
        );
    }
}

export default Landing