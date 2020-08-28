import React from 'react'

export default function Header(props) {
    const hasSubtitle = props.subtitle ? { 'display': 'block' } : { 'display': 'none' }
    return (
        <div className='pageHeader'>
            <h1>{props.title}</h1>
            <h3 style={hasSubtitle}>{props.subtitle}</h3>
        </div>
    )
}