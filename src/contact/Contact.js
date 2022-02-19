import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Navbar'
import Header from '../Header'
import ContactForm from './ContactForm'
import Resume from './Resume'
import SocialMedia from './SocialMedia'

export default function Contact() {
    return (
        <div className="Contact">
            <Helmet>
                <title>Contact | Steven Boutcher</title>
            </Helmet>
            <Navbar currentPage="Contact" />
            <Header title="CONTACT" />
            <ContactForm />
            <Resume />
            <SocialMedia />
        </div>
    );
}