import React from 'react';

const ProductDetails = ({ detail }) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={detail.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{detail.name}</h5>
                    <p className="card-text">Location: {detail.location}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <span>{detail.price}</span>
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;