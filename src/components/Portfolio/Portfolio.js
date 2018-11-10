import React from 'react';
import Carousel from '../Carousel/Carousel';

import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='portfolio_wrapper' id='portfolio_wrapper'>
            <p className='portfolio_heading text-white text-center'>Portfolio</p>
            <div className='main_carousel'>
                <div className='carousel_1'>
                    <Carousel
                        heading='Front End'
                        img1='/images/api-site.jpg'
                        img2='/images/clicky-game.png'
                        img3='/images/crystals.jpg'
                    />
                </div>
                <div className="carousel_2">
                    <Carousel
                        heading='Back End'
                        img1='/images/liri_node_app.gif'
                        img2='/images/node_mysql_storev2.gif'
                        img3='https://via.placeholder.com/500x250'
                    />
                </div>
                <div className="carousel_2">
                    <Carousel
                        heading='Full Stack'
                        img1='https://via.placeholder.com/500x250'
                        img2='https://via.placeholder.com/500x250'
                        img3='https://via.placeholder.com/500x250'
                    />
                </div>
            </div>
        </div>
    )
};

export default Portfolio;