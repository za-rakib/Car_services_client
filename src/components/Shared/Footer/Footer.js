import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterDetails from '../FooterDetails/FooterDetails';

const Footer = () => {
    const gerez = [
       
        // {name: "Gerez is a clean, creative, unique Theme which fits for all kinds of Auto Mechanic Car Repair Workshop Template is created as a wonderful solution for any cars and automobile or cars workshop websites."}
       
    ]
    const contact = [
        {name: "Dhanmondi-15A" , link: "//google.com/map"},
         
    ]
    const newslaters = [
        
    ]
    const quickLinks = [
        {name: "Make Appointment" , link: "/appointment"},
        {name: "About Company" , link: "/about"},
        {name: "Team Member" , link: "/team"},
        {name: "Latest News" , link: "/news"},
        
    ]
    return (
       
             <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                   
                    <FooterDetails key={1} menuTitle="GEREZ" menuItems={gerez}>
                        <div>
                            <p style={{color: "#4b3333"}}>Gerez is a clean, creative, unique Theme which fits for all kinds of Auto Mechanic Car Repair Workshop Template is created.</p>
                        </div>
                    </FooterDetails>
                    <FooterDetails key={2} menuTitle="Quick Links" menuItems={ quickLinks}/>
                    <FooterDetails key={3} menuTitle="Newslaters" menuItems={newslaters}>
                    <div className="mt-2">
                            <h6>Look out for reviews to know about experiences of tourist who have been there</h6>
                            <button className=" mt-3 btn btn-danger">Subscribe Now</button>
                        </div>
                </FooterDetails>
                    <FooterDetails key={4} menuTitle="Contact" menuItems={contact}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-3">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+563654378</button>
                        </div>
                    </FooterDetails>
                </div>
                <div className="copyRight text-center text-success">
                    <p className='text-success'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
     
    );
};

export default Footer;