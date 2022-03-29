import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import ConfettiGenerator from 'confetti-js'

export default function Landing() {

    useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
       
        return () => confetti.clear();
    }, [])

    return (
        <Link to='/about' className='Landing'>
            <Helmet>
                <title>Welcome! | Steven Boutcher</title>
            </Helmet>
            <canvas id='my-canvas'></canvas>
            <div className='landingText'>
                <h1>Hi, I'm Steven!</h1>
                <h2>Welcome to my website.</h2>
                <br />
                <h3>Click anywhere to continue...</h3>
            </div>
        </Link>
    );
}