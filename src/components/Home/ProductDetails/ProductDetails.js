import React from 'react';
import '../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const ProductDetails = ({ detail }) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={detail.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{detail.name}</h5>
                    <p className="card-text text-secondary"><i class="bi bi-geo-alt-fill"></i> {detail.location}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <span><i class="bi bi-tag-fill"></i> {detail.price}</span>
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;