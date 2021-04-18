import React from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import quality from '../../../images/quality2.png';
import expert from '../../../images/expert.png'
import modern from '../../../images/modern.jpg'
import online from '../../../images/online.png'

const serviceData = [
    {
        name: 'Quality Service',
        img: quality
    },
    {
        name: 'Expert Member',
        img: expert
    },
    {
        name: 'Modern Equipment',
        img: modern
    },
    {
        name: 'Online Support',
        img: online
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5" id='services'>
            <div className="text-center">
                <h4>What we do</h4>
                <h2>Quality Service Opportunity</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map((services => <ServicesDetails services={services} key={services.name} />))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;