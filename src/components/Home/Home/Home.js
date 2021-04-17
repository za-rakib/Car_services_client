import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Offer/>
           <Review/>
           <Footer/>
        </div>
    );
};

export default Home;