import React from 'react'

export default function ImageWindow(props) {

    return (
        <div className='imageWindow'>
            <img className="portfolioImage" src={props.certs.freeCodeCamp[0].image} alt='freeCodeCamp - Responsive Web Design' />
            <img className="portfolioImage" src={props.certs.freeCodeCamp[1].image} alt="freeCodeCamp - JavaScript Data Structures & Algorithms" />
            <img className="portfolioImage" src={props.certs.freeCodeCamp[2].image} alt="freeCodeCamp - Front End Libraries" />
        </div>
    )
}