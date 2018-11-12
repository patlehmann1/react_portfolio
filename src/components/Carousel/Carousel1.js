import React from 'react';
import './Carousel.css';

const Carousel1 = () => {
    return (
        <div className="carousel_wrapper text-white text-center">
            <div classname="ch_container">
                <p className='carousel_heading'>Front End</p>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={require('./images/api-site.jpg')} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/clicky-game.png')} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/musicSite.jpg')} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
};

export default Carousel1;