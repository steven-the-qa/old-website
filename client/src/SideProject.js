import React, { useState } from 'react'

export default function SideProjects(props) {
    const [cardSide, setCardSide] = useState('front');
    const flipCard = () => {
        cardSide === 'front' ? setCardSide('reverse') : setCardSide('front')
    }
    const FrontSide = (props) => {
        return(
            <div id={props.id} className='sideProject' onClick={flipCard}>
                {props.title}
            </div>
        )
    }

    const ReverseSide = (props) => {
        return (
            <div id={`${props.id}-description`} className='sideProject-description' onClick={flipCard}>
                <h2>{props.title}</h2>
                <strong>Description:</strong>
                <p>{props.description}</p>
                <strong>Features:</strong>
                <ul>{props.features}</ul>
                <a className='btn-viewProj' href={props.repo} target="_blank" rel="noopener noreferrer">View Repo</a>
                <a className='btn-viewProj' href={props.live} target="_blank" rel="noopener noreferrer">View Live</a>
            </div>
        )
    }

    return(
        <div className='sideProjects'>
            {cardSide === 'front' 
                ? <FrontSide 
                    id={props.id} 
                    title={props.title} 
                  /> 
                : <ReverseSide 
                    id={props.id} 
                    title={props.title}
                    description={props.description}
                    features={props.features}
                    repo={props.repo}
                    live={props.live}
                  />
            }
        </div>
    )
    
}