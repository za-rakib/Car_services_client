import React from 'react';
import about from '../../../images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about-container mb-5 pb-5 text-light'>
            <h1 className='text-center mb-5 pt-5'>About Our Gerez</h1>
            <div className='row'>
                <div className=" row col-md-5 ml-5 pl-5">
                    <img style={{ height: '500px', width: '500px' }} src={about} alt="" />
                </div>
                <div className="col-md-5 ml-5 pl-5">
                    <h1>We're Certified and Expert  <br />Car Servicing Agency</h1>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam ut quaerat officiis sit natus fugiat dolor sunt est harum, asperiores, reiciendis similique dolores molestias.</small>
                    <ol>
                        <li>
                            <h4> Professional Expert</h4>
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam deserunt officia doloribus odio aliquam.</small>
                        </li>
                        <li>
                            <h4> Quality Service Agency</h4>
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam deserunt officia doloribus odio aliquam.</small>
                        </li>
                        <li>
                            <h4>Award Wining Company</h4>
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam deserunt officia doloribus odio aliquam.</small>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default About;