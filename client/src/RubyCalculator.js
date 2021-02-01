import React, { useState } from 'react'
import sideProjects from './sideProjects.json'

export default function SideProjects() {
    const [cardSide, setCardSide] = useState('front');
    const flipCard = () => {
        cardSide === 'front' ? setCardSide('reverse') : setCardSide('front')
    }
    const FrontSide = () => {
        return(
            <div id="rubycalculator" className='sideProject' onClick={flipCard}>
                Ruby Calculator
            </div>
        )
    }
    const features = sideProjects.rubycalculator.features.map(feature => {
        return (
            <li className='sideProject-feature'>{feature}</li>
        )
    })

    const ReverseSide = () => {
        return (
            <div id="medicareandmore-description" className='sideProject-description' onClick={flipCard}>
                <h2>{sideProjects.rubycalculator.title}</h2>
                <strong>Description:</strong>
                <p>{sideProjects.rubycalculator.description}</p>
                <strong>Features:</strong>
                <ul>{features}</ul>
                <a className='btn-viewProj' href={sideProjects.rubycalculator.repo} target="_blank" rel="noopener noreferrer">View Repo</a>
                <a className='btn-viewProj' href={sideProjects.rubycalculator.live} target="_blank" rel="noopener noreferrer">View Live</a>
            </div>
        )
    }

    return(
        <div className='sideProjects'>
            {cardSide === 'front' ? <FrontSide /> : <ReverseSide />}
        </div>
    )
    
}