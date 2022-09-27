import React from 'react'
import contact from './web logos/contact.svg'
import gmail from './web logos/gmail.png'
const ContactPrev = ({scroll}) => {
    return (
        <div className='prevsblock' id='contactprev' ref={scroll}>
            <div className='imagesection'>
                <img src={contact} alt="" />
            </div>
            <div className="introsection">
                <h2>Let's <span>Connect</span></h2>
                <p>I'd love to hear about what you're working on and how I could help. I'm also open to discussing ideas and doing a project together. Drop me a mail or DM me on LinkedIn and let's have a talk.
                    Feel free to drop a message
                </p>
                <div className='btngroup'>
                    <a href="https://www.linkedin.com/in/ganpat-hada-33abb4227" target='_blank'><button className='primarybtn'>Linked <i className="fa-brands fa-linkedin"></i></button>&nbsp;</a>

                </div>
            </div>
        </div>
    )
}

export default ContactPrev