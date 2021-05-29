import React, { useEffect, useState } from 'react';
import Fakedata from "../../Fakedata/Fakedata.json"
import ProductDetails from '../ProductDetails/ProductDetails';

const Products = () => {
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        setDetails(Fakedata);
    },[]);
    console.log(details);
    return (
        <div className="mb-5">
            <div className="text-center mt-5">
                <h1><span style={{color:'rgb(13, 130, 177)'}}>Ready</span> For You</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-0">
                {
                    details.map(detail => <ProductDetails detail={detail}></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default Products;