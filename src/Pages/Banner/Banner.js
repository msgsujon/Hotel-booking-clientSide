import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* bannner here */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div style={{height:'500px'}} className="carousel-item active">
                        <img src="https://prod.clubmarriott.in/content/dam/tlc/en/marriott/club-marriott/club-marriott-india/city/bengaluru/jw-marriott-bengaluru/Homepage/jw-marriott-bengaluru-banner.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div style={{height:'500px'}} className="carousel-item">
                        <img src="https://thedinah.com/wp-content/uploads/2018/10/hotel-banner.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div style={{height:'500px'}} className="carousel-item">
                        <img src="https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1920/media/minor/anantara/images/eastern-mangroves-hotels--spa-by-anantara/acommodation/details-page/royal-mangroves-suite/header/eastern_mangroves_by_anantara_royal_mangroves_suite_02_1920x600.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;