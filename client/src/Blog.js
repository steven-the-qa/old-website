import React from 'react'
import Navbar from './Navbar'

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
                <Navbar />
                <h1>{this.state.blogTitle}</h1>
                <h2>Taking the road less traveled for the sake of expanding my horizons.</h2>
            </div>
        );
    }
}

export default Blog