import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333333', color: '#F5F5F5' }}> {/* Dark Gray background, Light Gray text */}
            <div className="text-center" style={{ padding: '20px 0', borderTop: '1px solid #0E73DB' }}> {/* Deep Blue border */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-md-start mb-4 mb-md-0">
                            <p style={{ fontSize: '14px', margin: 50 }}>&copy; {new Date().getFullYear()} Kevin Raj Karki | All Rights Reserved</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <Link to="/contact" style={{ color: '#0E73DB', textDecoration: 'none' }}> {/* Deep Blue for link */}
                                <h5 style={{ fontSize: '14px' }}>Contact Me</h5>
                            </Link>
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
