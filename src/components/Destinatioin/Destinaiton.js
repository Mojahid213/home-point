import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const Destinaiton = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{height:'450px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <h1>You purchased successfully</h1>
            </div>
        </div>
    );
};

export default Destinaiton;