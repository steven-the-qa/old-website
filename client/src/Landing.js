import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Landing() {

        return (
            <Link to='/about' className='Landing'>
                    <Helmet>
                        <title>Welcome! | Steven Boutcher</title>
                    </Helmet>
                    <div className='landingText'>
                        <h1>Hi, I'm Steven!</h1>
                        <h2>Welcome to my website.</h2>
                    </div>
                        <h3>Click anywhere to continue...</h3>
            </Link>
        );
}