import React from 'react'
import fcc_rwd from './fcc1.jpg'
import fcc_jsdsa from './fcc2.jpg'
import fcc_fel from './fcc3.jpg'

export default function ImageWindow() {
    return (
        <div className='imageWindow'>
            <img className="portfolioImage" src={fcc_rwd} alt='freeCodeCamp - Responsive Web Design' />
            <img className="portfolioImage" src={fcc_jsdsa} alt="freeCodeCamp - JavaScript Data Structures & Algorithms" />
            <img className="portfolioImage" src={fcc_fel} alt="freeCodeCamp - Front End Libraries" />
        </div>
    )
}