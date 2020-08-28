import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
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
                <Header title="CONTACTS" />
            </div>
        );
    }
}

export default Contact