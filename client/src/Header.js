import React, { useState, useEffect } from 'react'
import selfie from './selfie.jpg'

export default function Header(props) {
    const hasSubtitle = props.subtitle ? { 'display': 'block' } : { 'display': 'none' }
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const breakpoint = 1200
    const adjustBioPic = width < breakpoint ? { 'display': 'block' } : { 'display': 'none' }
    
    return (
        <div className='header'>
            <h1>{props.title}</h1>
            <h3 style={hasSubtitle}>{props.subtitle}</h3>
            <img className="bio-pic" style={adjustBioPic} src={selfie} alt="selfie" />
        </div>
    )
}