import React from 'react';

import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact_wrapper p-5" id="contact_wrapper">
            <div className="contact_info text-white">
                <h3 className="contact_me">Let's Stay Connected!</h3>
                <p className="contact_content">
                    I'm currently open to new employment opportunities and I love side projects. <br />
                    Let's collaborate!
                </p>
                <div className="contact_areas">
                    <p><i class="fas fa-envelope"></i> Email: <a className="contact_link" href="mailto:patlehmann1@gmail.com" target="_blank" rel="noopener noreferrer">patlehmann1@gmail.com</a></p>
                    <p><i class="fab fa-github-square"></i> GitHub: <a className="contact_link" href="https://github.com/patlehmann1/" target="_blank" rel="noopener noreferrer">github.com/patlehmann1/</a></p>
                    <p><i class="fab fa-linkedin"></i> LinkedIn: <a className="contact_link" href="https://linkedin.com/in/patlehmann1" target="_blank" rel="noopener noreferrer">linkedin.com/in/patlehmann1</a></p>
                    <p><i class="fab fa-twitter"></i> Twitter: <a className="contact_link" href="https://twitter.com/N0TH1S1SP4TR1CK" target="_blank" rel="noopener noreferrer">twitter.com/N0TH1S1SP4TR1CK</a></p>
                    <p>Blog Coming Soon!</p>

                </div>
            </div>
            <div className="spotify_embed">
                <p> My coding music </p>
                <iframe className="sp"
                    src="https://open.spotify.com/embed/artist/2NFrAuh8RQdQoS7iYFbckw"
                    width="300" height="380" title="the_midnight"
                    frameborder="0" allowtransparency="true"
                    allow="encrypted-media">
                </iframe>
            </div>
        </div>
    )
}

export default ContactPage;