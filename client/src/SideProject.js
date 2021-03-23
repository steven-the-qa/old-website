import React, { useState } from 'react'
import projectData from './sideProjects.json'

export default function SideProject(props) {
    const [cardSide, setCardSide] = useState('front');
    const flipCard = () => {
        cardSide === 'front' ? setCardSide('reverse') : setCardSide('front')
    }
    const FrontSide = () => {
        return(
            <div id={props.projectId} className='sideProject' onClick={flipCard}>
                {projectData[props.projectId].title}
            </div>
        )
    }
    const features = projectData[props.projectId].features.map(feature => {
        return (
            <li className='sideProject-feature'>{feature}</li>
        )
    })

    const liveSite = projectData[props.projectId].live && <a className='btn-viewProj' href={projectData[props.projectId].live} target="_blank" rel="noopener noreferrer">View Live</a>
    
    const ReverseSide = () => {
        return (
            <div id={`${props.projectId}-description`} className='sideProject-description' onClick={flipCard}>
                <h2>{projectData[props.projectId].title}</h2>
                <strong>Description:</strong>
                <p>{projectData[props.projectId].description}</p>
                <strong>Features:</strong>
                <ul>{features}</ul>
                <a className='btn-viewProj' href={projectData[props.projectId].repo} target="_blank" rel="noopener noreferrer">View Repo</a>
                {liveSite}
            </div>
        )
    }

    return(
        cardSide === 'front' ? <FrontSide /> : <ReverseSide />
    )
    
}