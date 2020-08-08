import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="Contact">
                <Helmet>
                    <title>Contact | Steven Boutcher</title>
                </Helmet>
                <Navbar currentPage="Contact" />
                <div className='pageHeader'>
                    <h1>CONTACT</h1>
                </div>
            </div>
        );
    }
}

export default Contact