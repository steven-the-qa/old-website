import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

class Blog extends React.Component {
    constructor() {
        super()
        this.state = {
            blogTitle: ''
        }
        this.getBlogTitle = this.getBlogTitle.bind(this)
    }
    componentDidMount() {
        this.getBlogTitle()
    }
    
    getBlogTitle() {
    fetch('/api/blog')
    .then(res => res.json())
    .then(data => this.setState({
        blogTitle: data.blogTitle
    }))
    }

    render() {
        return (
            <div className="Blog">
                <Helmet>
                    <title>Life: In Development</title>
                </Helmet>
                <Navbar currentPage="Blog" />
                <div className='pageHeader'>
                    <h1>LIFE: IN DEVELOPMENT</h1>
                    <h3>“Curiosity is, in great and generous minds, the first passion and the last.” ―Samuel Johnson</h3>
                </div>
            </div>
        );
    }
}

export default Blog