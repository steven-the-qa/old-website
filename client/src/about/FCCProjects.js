import React, { useState, useEffect } from 'react'
import fccProjects from '../data/fccProjects.json'

export default function FCCProjects() {
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
    const [projCategory, setProjCategory] = useState("rwd")
    const handleCategory = event => {
        const { id } = event.target
        setProjCategory(id)
    }
//Set Name
    const [projName, setProjName] = useState("Tribute Page")
    const handleName = event => {
        const { id } = event.target
        setProjName(id)
    }
//Set Category Images
    let projImages = fccProjects[projCategory].map(proj => {
        return (
            <img id={proj.displayName} onClick={handleName} className="projectImage" src={require(`../images/fccprojects/${proj.title}.png`)} alt={`${projCategory} - ${proj.displayName}`} />
        )
    })
//Set Current Certificate
    const currentProj = fccProjects[projCategory].find(proj => proj.displayName === projName)
        ? fccProjects[projCategory].find(proj => proj.displayName === projName)
        : fccProjects[projCategory][0]

    return(
        <div className="fccProjects-container">
            <h3 className="fccProjects-title">freeCodeCamp Learning Projects</h3>
            <div className='fccProjectsNav'>
                <p id='rwd' onClick={handleCategory} className='btn-proj' style={adjustFont}>Responsive Web Design</p>
                <p id='jsads' onClick={handleCategory} className='btn-proj' style={adjustFont}>JavaScript Data Structures & Algorithms</p>
                <p id='fel' onClick={handleCategory} className='btn-proj' style={adjustFont}>Front-End Libraries</p>
            </div>
            <div className='fccProjects'>
                <div className='imageWindow'>
                    {projImages}
                </div>
                <div className='descriptionWindow'>
                    <h2>{currentProj.displayName}</h2>
                    <div className='projDescriptionBody'>
                        <strong>Description:</strong>
                        <p>{currentProj.description}</p>
                        <a className='btn-viewProj' href={currentProj.repo} target="_blank" rel="noopener noreferrer">View Repo</a>
                        {currentProj.live && <a className='btn-viewProj' href={currentProj.live} target="_blank" rel="noopener noreferrer">View Live</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}