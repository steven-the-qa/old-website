import React from 'react'
import SideProject from './SideProject'

export default function SideProjects() {
    return(
        <div className="sideProjects">
            <h3 className='sideProjects-title'>Side Projects</h3>
            <SideProject projectId="medicareandmore" />
            <SideProject projectId="rubycalculator" />
            <SideProject projectId="birthdayhelper" />
        </div>
    )
}