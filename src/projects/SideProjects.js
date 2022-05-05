import React from 'react'
import SideProject from './SideProject'

export default function SideProjects() {
    return(
        <div className="sideProjects">
            <h3 className='sideProjects-title'>Side Projects</h3>
            <SideProject projectId="medicaremore" />
            <SideProject projectId="rubycalculator" />
            <SideProject projectId="birthdayhelper" />
            <SideProject projectId="sitefigma" />
            <SideProject projectId="scrimbasetstate" />
        </div>
    )
}