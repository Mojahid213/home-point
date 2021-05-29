import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="d-flex navbar navbar-expand-lg navbar-light shadow-sm bg-light">
                <div className="container-fluid container-md">
                    <a className="navbar-brand custom_Nav_brand" href="/#">HomePoint</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="justify-content-end collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-md-2">
                                <a className="nav-link text-dark text-center fw-bold" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item mx-md-2">
                                <a className="nav-link text-dark text-center fw-bold" href="/#">Items</a>
                            </li>
                            <li className="nav-item mx-md-2">
                                <a className="nav-link text-light text-center rounded bg-success fw-bold " href="/#">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;