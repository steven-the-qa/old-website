import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Header from './Header'
import ContactForm from './ContactForm'

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
                <Header title="CONTACT" />
                <ContactForm />
            </div>
        );
    }
}

export default Contact