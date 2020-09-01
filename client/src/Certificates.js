import React from 'react'
import ImageWindow from './ImageWindow'
import DescriptionWindow from './DescriptionWindow'
import certificates from './certificates.json'

class Certificates extends React.Component {
    constructor() {
        super()
        this.state = {
            data: certificates
        }
    }

    render() {
        return(
            <div className='certificates'>
                <ImageWindow />
                <DescriptionWindow />
            </div>
        )
    }
}

export default Certificates