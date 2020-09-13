import React from 'react'

class CookieJar extends React.Component {
    constructor() {
        super()
        this.state = {
            snickerdoodle: 0
        }
        this.bakeOneDozenSnickerdoodles = this.bakeOneDozenSnickerdoodles.bind(this)
    }

    bakeOneDozenSnickerdoodles() {
        this.setState(oldCookies => {
            return {
                snickerdoodle: oldCookies.snickerdoodle + 12
            }
        })
    }

    render() {
        return (
            <div>{this.state.snickerdoodle}</div>
        )
    }
}

export default CookieJar