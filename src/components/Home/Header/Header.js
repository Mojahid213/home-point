import React from 'react';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
        </div>
    );
};

export default Header;