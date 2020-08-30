import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

export default function Blog() {

    return (
        <div className="Blog">
            <Helmet>
                <title>Life: In Development</title>
            </Helmet>
            <Navbar currentPage="Blog" />
            <div className="header">
                <h1>LIFE: IN DEVELOPMENT</h1>
                <h3>“Curiosity is, in great and generous minds, the first passion and the last.” ―Samuel Johnson</h3>
            </div>
        </div>
    );
}