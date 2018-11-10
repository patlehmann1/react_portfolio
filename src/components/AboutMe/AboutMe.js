import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme_wrapper">
            <div className="about_heading text-center">
                About Me
            </div>
            <div className="about_cards">
                <div class="card m-3">
                    <div class="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>
        </div>
            );
        };
        
export default AboutMe;