import React from 'react'
import contact from './web logos/contact.svg'
const ContactPrev = () => {
    return (
        <div className='prevsblock' id='contactprev'>
            <div className='imagesection'>
                <img src={contact} alt="" />
            </div>
            <div className="introsection">
                <p>I'd love to hear about what you're working on and how I could help. I'm also open to discussing ideas and doing a project together. Drop me a mail or DM me on LinkedIn and let's have a talk.
                    Feel free to drop a message
                </p>
                <button id='download_cv' className='primarybtn'>linked in</button>
            </div>
        </div>
    )
}

export default ContactPrev