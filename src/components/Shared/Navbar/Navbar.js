import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto nav">
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/services">Services</Link>                   
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/ourTeam">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/contactUs">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;