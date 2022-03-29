import React from 'react'

export default function SocialMedia() {
    return(
        <div className="social-media">
            <h2>Follow me!</h2>
            <div className="social-link-container">
                <a id="linkedIn" className="social-link" href="https://www.linkedin.com/in/boutchersj/" target="_blank" rel="noopener noreferrer" alt="LinkedIn profile link">
                    <div className="social-link-div">LinkedIn logo image</div>
                </a>
                <a id="polywork" className="social-link" href="https://www.polywork.com/boutchersj" target="_blank" rel="noopener noreferrer" alt="Polywork profile link">
                    <div className="social-link-div">Polywork logo image</div>
                </a>
            </div>
        </div>
    )
}