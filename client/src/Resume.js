import React from 'react'
import resume from './Resume_9_14_2020.pdf'

export default function Resume() {
    return(
        <div className="resume">
            <div className="resume-container">
                <h2>...download my resume...</h2>
                <a className="resume-link" href={resume} download>
                    <i className="fa fa-download"></i> Download
                </a>
            </div>
        </div>
    )
}