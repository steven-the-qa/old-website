import React, { useState, useEffect } from 'react'
import certificates from './certificates.json'

function Certificates() {
//Monitor Viewport Size
    const [width, setWidth] = useState(window.innerWidth);
        
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const breakpoint = 640
    const adjustFont = width < breakpoint ? { 'fontSize': '60%' } : { 'fontSize': '100%' }
//Set Category
    const [certCategory, setCertCategory] = useState("freeCodeCamp")
    const handleCategory = event => {
        const { id } = event.target
        setCertCategory(id)
    }
//Set Name
    const [certName, setCertName] = useState("Front End Libraries")
    const handleName = event => {
        const { id } = event.target
        setCertName(id)
    }
//Set Category Images
    let certImages = certificates[certCategory].map(cert => {
        return (
            cert.image && <img id={cert.title} onClick={handleName} className="portfolioImage" src={cert.image} alt={`${certCategory} - ${cert.title}`} />
        )
    })
//Set Current Certificate
    const currentCert = certificates[certCategory].find(cert => cert.title === certName)
        ? certificates[certCategory].find(cert => cert.title === certName)
        : certificates[certCategory][0]
    const listItems = currentCert.bulletPoints.map( item => { return (<li>{item}</li>) })

    return(
        <div className="certificates-container">
            <h3 className="certificates-title">Learning Certificates</h3>
            <div className='certificatesNav'>
                <p id='freeCodeCamp' onClick={handleCategory} className='btn-cert' style={adjustFont}>freeCodeCamp</p>
                <p id='udemy' onClick={handleCategory} className='btn-cert' style={adjustFont}>Udemy</p>
                <p id='astqb' onClick={handleCategory} className='btn-cert' style={adjustFont}>ASTQB</p>
                <p id='scrimba' onClick={handleCategory} className='btn-cert' style={adjustFont}>Scrimba</p>
                <p id='codeCademy' onClick={handleCategory} className='btn-cert' style={adjustFont}>CodeCademy</p>
            </div>
            <div className='certificates'>
                <div className='imageWindow'>
                    {certImages}
                </div>
                <div className='descriptionWindow'>
                    <h2>{currentCert.title}</h2>
                    <div className='descriptionBody'>
                        <p>{currentCert.subtitle}</p>
                        <p>{currentCert.summary}</p>
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates