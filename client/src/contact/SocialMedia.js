import React from 'react'

export default function SocialMedia() {
    return(
        <div className="social-media">
            <h2>Follow me on social!</h2>
            <div className="social-link-container">
                <a id="linkedIn" className="social-link" href="https://www.linkedin.com/in/boutchersj/" target="_blank" rel="noopener noreferrer" alt="LinkedIn profile link">
                <div className="social-link-div">LinkedIn logo image</div>
                </a>
                <a id="twitter" className="social-link" href="https://twitter.com/StevenBoutcher" target="_blank" rel="noopener noreferrer" alt="Twitter profile link">
                    <div className="social-link-div">Twitter logo image</div>
                </a>
            </div>
        </div>
    )
}