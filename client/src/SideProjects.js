import React from 'react'
import SideProject from './SideProject'
import sideProjects from './sideProjects.json'

export default function SideProjects() {
    const projectNames = Object.keys(sideProjects)
    return(
        <div className='sideProjects'>
            <h3 className='sideProjects-title'>Side Projects</h3>
            {projectNames.map(name => {
                return <SideProject 
                    id = {sideProjects[name].id}
                    title = {sideProjects[name].title}
                    description = {sideProjects[name].description}
                    features = {sideProjects[name].features.map(feature => <li className='sideProject-feature'>{feature}</li>)}
                    repo = {sideProjects[name].repo}
                    live = {sideProjects[name].live}
                />
            })}
        </div>

    )
}