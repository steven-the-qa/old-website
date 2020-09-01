import React from 'react'

export default function DescriptionWindow(props) {
    const listItems = props.certs.freeCodeCamp[2].bulletPoints.map( item => { return (<li>{item}</li>) })
    return (
        <div className='descriptionWindow'>
            <h2>{props.certs.freeCodeCamp[2].title}</h2>
            <div className='descriptionBody'>
                <p>{props.certs.freeCodeCamp[2].subtitle}</p>
                <p>{props.certs.freeCodeCamp[2].summary}</p>
                <ul>
                    {listItems}
                </ul>
            </div>

        </div>
    )
}