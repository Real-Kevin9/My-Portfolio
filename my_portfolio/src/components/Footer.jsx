import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: '#333333', 
            color: '#F5F5F5',  
            bottom: '0', 
            width: '100%', 
            zIndex: '1000', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px 20px', // Adjust padding for a compact design
            borderTop: '1px solid #0E73DB' // Deep Blue border
        }}>
            <p style={{ fontSize: '12px', margin: 0 }}>&copy; {new Date().getFullYear()} Kevin Raj Karki | All Rights Reserved</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: '12px', margin: '0 15px' }}> <FaMapMarkerAlt /> Kathmandu, Nepal</p>
                <p style={{ fontSize: '12px', margin: '0 15px' }}> <FaEnvelope /> kevinrajkarki97@gmail.com</p>
                <p style={{ fontSize: '12px', margin: '0 15px' }}> <FaPhone /> +977-981-8546347</p>
            </div>
        </footer>
    );
};

export default Footer;
