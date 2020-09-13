import React, { useEffect, useState } from 'react'
import selfie from './selfie.jpg'

export default function Bio() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const breakpoint = 1200
    const adjustBioPic = width > breakpoint ? { 'display': 'block' } : { 'display': 'none' }

    return(
        <div className="bio">
        <img className="bio-pic" style={adjustBioPic} src={selfie} alt="selfie" />
        <div className='bio-description'>
            <h1>Hi! I'm Steven!</h1>
            <p>
                I’ve spent 3 years learning full-stack JavaScript and responsive UI design in my spare time. 
                I studied Spanish Education in college thinking I was putting my language learning aptitude to the best use, 
                but I’ve found myself much more excited by using programming languages to build cool web applications.
            </p>
            <p>
                As a QA Analyst, I’m always looking for ways to use my web skills to benefit the team, 
                even if it’s just noticing UI bugs others may miss.
            </p>
            <p> 
                My fiancée always been super supportive of all my coding efforts 
                and is my greatest inspiration. When I'm not working or building stuff, 
                I'm enjoying life with her and our pup!
            </p>
        </div>
    </div>
    )
}