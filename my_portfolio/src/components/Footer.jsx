import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="text-center text-white" style={{ background: 'linear-gradient(to right, #213a5c, #0e2038, #213a5c)', padding: '20px 0', borderTop: '1px solid #fff' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-md-start mb-4 mb-md-0">
                            <p style={{ fontSize: '14px', margin: 50 }}>&copy; {new Date().getFullYear()} Kevin Raj Karki | All Rights Reserved</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <h5 style={{ fontSize: '14px' }}>Contact Us</h5>
                            <p style={{ fontSize: '14px' }}> <FaMapMarkerAlt /> Kathmandu, Nepal</p>
                            <p style={{ fontSize: '14px' }}> <FaEnvelope /> Email: kevinrajkarki97@gmail.com</p>
                            <p style={{ fontSize: '14px' }}> <FaPhone /> Phone: +977-981-8546347</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
