import React from 'react';
import './Carousel.css'
import House1 from "../../../Img/house_1.png";
import House2 from "../../../Img/house_2.png";
import House3 from "../../../Img/house_3.png"

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner carousel_Backgorund">
                    <div className="carousel-item active">
                        <div className="row d-flex align-items-center mt-5 mb-5">
                            <div className="col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
                                <div className="p-4 p-md-3">
                                    <h1 className="All-Slide-heading">FIND THE BEST HOUSE THAT FITS YOU</h1>
                                    <p className="slider_para_des my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officia repellendus rem sapiente. Aut, odio sed sequi itaque qui nihil, eaque aliquid, pariatur tempora ea minima quasi vitae. Laboriosam, quam!</p>
                                    <button className="btn btn-dark mt-1">Get Started</button>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
                                <div>
                                    <img src={House1} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex align-items-center mt-5 mb-5">
                            <div className="col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
                                <div className="p-4 p-md-3">
                                    <h1 className="All-Slide-heading">GRAB YOUR EXCITING OFFERS</h1>
                                    <p className="slider_para_des my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dignissimos qui laboriosam debitis. Natus impedit explicabo saepe quo inventore numquam maiores et alias incidunt tempore? Quos reiciendis tenetur unde ut!</p>
                                    <button className="btn btn-dark mt-1">Get Started</button>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
                                <div>
                                    <img src={House2} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>                 </div>
                    <div className="carousel-item">
                        <div className="row d-flex align-items-center mt-5 mb-5">
                            <div className="col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
                                <div className="p-4 p-md-3">
                                    <h1 className="All-Slide-heading">GET THE BEST DEAL AT THE BEST PRICE</h1>
                                    <p className="slider_para_des my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur deleniti in labore ad cum amet commodi consequatur minima velit adipisci! Recusandae consequatur a commodi earum suscipit explicabo vero asperiores eaque?</p>
                                    <button className="btn btn-dark mt-1">Get Started</button>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
                                <div>
                                    <img src={House3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>                   </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    );
};

export default Carousel;