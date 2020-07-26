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
                    <title>The Rounda-Boutch Way</title>
                </Helmet>
                <Navbar />
                <h1>The Rounda-Boutch Way</h1>
                <h3>Taking the road less traveled for the sake of expanding my horizons.</h3>
            </div>
        );
    }
}

export default Blog