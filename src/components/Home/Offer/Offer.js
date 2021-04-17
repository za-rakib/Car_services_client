import React from 'react';
import service from '../../../images/service.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Offer.css'

const Offer = () => {
    return (
        <section className="offer-container mt-5">
            <div className="text-center Offer-text pt-5 mb-5">
                <h4>What We Offer</h4>
                <h2>We Provide Quality Service</h2>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                        <div className="mr-3 mb-4 pt-4 offerCard d-flex">
                            <FontAwesomeIcon className="mr-3 fa-2x offerIcon" icon={faCoffee} />
                            <h4>Auto Engine Servicing</h4>
                        </div>
                        <div className="mr-3 mb-4 pt-4 offerCard d-flex">
                            <FontAwesomeIcon className="mr-3 fa-2x offerIcon" icon={faCoffee} />
                            <h4>Auto Engine Servicing</h4>
                        </div> 
                        <div className="mr-3 mb-4 offerCard d-flex pt-4">
                            <FontAwesomeIcon className="mr-3 fa-2x offerIcon" icon={faCoffee} />
                            <h4>Auto Engine Servicing</h4>
                        </div>  
                        <div className="mr-3 mb-4 pt-4 offerCard d-flex">
                            <FontAwesomeIcon className="mr-3 fa-2x offerIcon" icon={faCoffee} />
                            <h4>Auto Engine Servicing</h4>
                        </div>            
                </div>
                <div className="col-md-4">
                    <img style={{ height: '400px', width: '400px' }} src={service} alt="" />
                </div>
                <div className="col-md-3 offer-part">
                    <div>
                        <h3 className="mt-4 mb-3">We have 25 years of experience in auto servicing</h3>
                        <small>Car Lovers Automotive Inc. comprises of highly qualified personnel always prepared eager to meet your every automotive needs. Our experts ensure your vehicle stays fit to hit the road, assuring you of a safe, comfortable and secure journey</small>
                        <ul  className="mt-4 mb-3">
                            <li>Tire and while</li>
                            <li>Drivability Problem </li>
                            <li>Automotive Filters</li>
                        </ul>
                        <button type="button" class="btn btn-secondary">Learn More</button>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </section>
    );
};

export default Offer;