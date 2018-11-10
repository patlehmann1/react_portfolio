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
                        img1='https://via.placeholder.com/550x300'
                        img2='https://via.placeholder.com/550x300'
                        img3='https://via.placeholder.com/550x300'
                    />
                </div>
                <div className="carousel_2">
                    <Carousel
                        img1='https://via.placeholder.com/550x300'
                        img2='https://via.placeholder.com/550x300'
                        img3='https://via.placeholder.com/550x300'
                    />
                </div>
                <div className="carousel_2">
                    <Carousel
                        img1='https://via.placeholder.com/550x300'
                        img2='https://via.placeholder.com/550x300'
                        img3='https://via.placeholder.com/550x300'
                    />
                </div>
            </div>
        </div>
    )
};

export default Portfolio;