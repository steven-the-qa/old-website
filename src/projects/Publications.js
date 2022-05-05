import React from 'react'
import SideProject from './SideProject'

export default function Publications() {

    return (
        <div className='publications'>
            <h3 className='publications-title'>Publications</h3>
            <SideProject projectId="setstate" />
            <SideProject projectId="scrimbasetstate" />
        </div>
    )
}