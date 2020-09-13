import React from 'react'

export default function Hobbies() {
    const showText = (event) => {
        const { id } = event.target

        if (document.getElementById(id).style.backgroundImage === `none`) {
            document.getElementById(id).style.backgroundImage = `var(--${id})`
            document.getElementById(id).classList.remove('hobby-text')
            document.getElementById(id).innerHTML = ''
        }

        else {
            document.getElementById(id).style.backgroundImage = 'none'
            document.getElementById(id).classList.add('hobby-text')
            document.getElementById(id).innerHTML = id.toUpperCase()
        }
    }
    return (
        <div className='hobbies'>
            <div id="parkour" className="hobby-pic" onClick={showText} alt="parkour" />
            <div id="languages" className="hobby-pic" onClick={showText} alt="languages" />
            <div id="travel" className="hobby-pic" onClick={showText} alt="travel" />
            <div id="violin" className="hobby-pic" onClick={showText} alt="violin" />
        </div>
    )
}