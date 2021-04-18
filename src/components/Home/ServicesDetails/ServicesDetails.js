import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const ServicesDetails = ({ services }) => {
    const history = useHistory()
    const handleBuy = (servicesType) => {
        history.push(`/dashboard/${servicesType}`);
    }
    return (
        <div className="card-group col-md-3 text-success ">
            <div className="card shadow p-3 mb-5 bg-red rounded">
                <img className="card-img-top offset-md-1 mt-3" style={{ height: '50px', width: '50px' }} src={services.img} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{services.name}</h4>
                    <small className="card-text text-primary"> Professional Car Servicing, Massive Savings on Main Dealer Prices </small>
                    <p>Read More <FontAwesomeIcon icon={faArrowRight} /> </p>
                    <button type="button" class="btn btn-danger" onClick={() => handleBuy(services.servicesType)}>Read More</button>
                </div>
            </div>
        </div>

    );
};

export default ServicesDetails;