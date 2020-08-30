import React, { useState, useEffect } from 'react'

export default function CertificatesNav() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const breakpoint = 640
    const adjustFont = width < breakpoint ? { 'fontSize': '60%' } : { 'fontSize': '100%' }
    return (
        <div className='certificatesNav'>
            <p id='freeCodeCamp' className='btn-cert' style={adjustFont}>freeCodeCamp</p>
            <p id='udemy' className='btn-cert' style={adjustFont}>Udemy</p>
            <p id='astqb' className='btn-cert' style={adjustFont}>ASTQB</p>
            <p id='scrimba' className='btn-cert' style={adjustFont}>Scrimba</p>
        </div>
    )
}