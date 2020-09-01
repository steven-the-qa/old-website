import React from 'react'
import ImageWindow from './ImageWindow'
import DescriptionWindow from './DescriptionWindow'
import certificates from './certificates.json'

function Certificates() {

    return(
        <div className='certificates'>
            <ImageWindow certs = {certificates}/>
            <DescriptionWindow certs = {certificates}/>
        </div>
    )
}

export default Certificates