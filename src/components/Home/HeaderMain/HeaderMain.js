import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-6 offset-md-1">
                <p>Professional Auto Car Servicing</p>
                <h1 className='title' >Qualified Car <br /> Wash Servicing</h1>
                 <br/>
                <button className="btn btn-danger">Learn more <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            <div className="col-md-4">

            </div>
        </main>
    );
};

export default HeaderMain;