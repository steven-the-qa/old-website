import React, { useState } from 'react'
import sideProjects from './sideProjects.json'

export default function SideProjects() {
    const [cardSide, setCardSide] = useState('front');
    const flipCard = () => {
        cardSide === 'front' ? setCardSide('reverse') : setCardSide('front')
    }
    const FrontSide = () => {
        return(
            <div id="medicareandmore" className='sideProject' onClick={flipCard}>
                Medicare & More Insurance Agency
            </div>
        )
    }
    const features = sideProjects.medicareandmore.features.map(feature => {
        return (
            <li className='sideProject-feature'>{feature}</li>
        )
    })

    const ReverseSide = () => {
        return (
            <div id="medicareandmore-description" className='sideProject-description' onClick={flipCard}>
                <h2>{sideProjects.medicareandmore.title}</h2>
                <strong>Description:</strong>
                <p>{sideProjects.medicareandmore.description}</p>
                <strong>Features:</strong>
                <ul>{features}</ul>
                <a className='btn-repo' href={sideProjects.medicareandmore.repo}>View Repo</a>
                <a className='btn-repo' href={sideProjects.medicareandmore.live}>View Live</a>
            </div>
        )
    }

    return(
        <div className='sideProjects'>
            <h3 className='sideProjects-title'>Side Projects</h3>
            {cardSide === 'front' ? <FrontSide /> : <ReverseSide />}
        </div>
    )
    
}