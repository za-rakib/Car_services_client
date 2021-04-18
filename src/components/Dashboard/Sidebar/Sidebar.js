/* eslint-disable jsx-a11y/anchor-is-valid */
import './sidebar.css';
import React from 'react';
import { a, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGripHorizontal, faCommentAlt, faCartPlus, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{ height: '100vh' }}>
            <ul className="">
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customerDashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Booking</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;