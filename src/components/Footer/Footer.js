import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="app_footer text-white">
            <p className="footer_text">Made with love by
            <a className="contact_link" href="github.com/patlehmann1/"
                    target="_blank" rel="noopener noreferrer"> Patrick Lehmann
            </a>, late 2018.
            </p>
        </footer>
    )
};

export default Footer;