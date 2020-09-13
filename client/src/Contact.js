import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Header from './Header'
import ContactForm from './ContactForm'
import SocialMedia from './SocialMedia'

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
                <SocialMedia />
            </div>
        );
    }
}

export default Contact