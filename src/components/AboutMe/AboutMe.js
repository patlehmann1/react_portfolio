import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme_wrapper" id="aboutme_wrapper">
            <div className="about_heading text-center">
                About Me
            </div>
            <div className="about_cards">
                <div class="card cards m-3">
                    <div class="card-body">
                        <div className="card-heading">
                            Proficient With <hr />
                        </div>
                        <div className="card-content">
                            <p>
                                Front End <br />
                                HTML5, CSS3, JavaScript, jQuery, React, Bootstrap, Handlebars
                            </p>
                            <p>
                                Back End <br />
                                Node.js, Express, Postman, Mongoose, Sequelize, RESTful APIs, CRUD Operations
                            </p>
                            <p>
                                Database <br />
                                MongoDB, MySQL, Firebase
                            </p>
                            <p>
                                Other <br />
                                Git, Kanban
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card cards m-3">
                    <div class="card-body">
                        <div className="card-heading">
                            Education <hr />
                        </div>
                        <div className="card-content">
                            <p>
                                2018 <br />
                                University of Richmond School of Professional and Continuing Studies <br />
                                Richmond, VA <br />
                                Certificate, Full-Stack Web Development
                            </p>
                            <p>
                                2008 <br />
                                Katharine Gibbs School <br />
                                Melville, NY <br />
                                Associate's Degree, Game and Web Design 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card cards m-3">
                    <div class="card-body">
                        <div className="card-heading">
                            When i'm not doing dev things, I like to... <hr />
                        </div>
                        <div className="card-content">
                            <ul>
                                <li>play golf (It's a family thing!)</li>
                                <li>play chess (Not good, getting better though!)</li>
                                <li>play classic video games (Love my SNES Classic!)</li>
                                <li>spend time in nature</li>
                                <li>go to the gym</li>
                                <li>ski/snowboard</li>
                                <li>go to concerts (I like many different genres of music!)</li>
                                <li>talk about how I miss New York pizza and bagels</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card cards bottom_text text-center">
                <p>
                    "The difference between a successful person and others is not a lack of strength, 
                    not a lack of knowledge, but rather a lack of will." <br /> -Vince Lombardi
                </p>
            </div>
        </div>
    );
};

export default AboutMe;