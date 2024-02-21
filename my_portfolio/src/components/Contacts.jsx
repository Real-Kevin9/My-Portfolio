import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const CountryCode = {
  '': 'Select Country Code',
  '+1': 'United States',
  '+44': 'United Kingdom',
  '+61': 'Australia',
  '+977': 'Nepal',
  // Add more country codes as needed
};

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (!email || !phoneNumber || !countryCode || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Send the form data to a server or email service
    console.log(`Email: ${email}\nPhone Number: ${phoneNumber}\nCountry Code: ${countryCode}\nMessage: ${message}`);

    // Reset the form fields
    setEmail('');
    setPhoneNumber('');
    setCountryCode('');
    setMessage('');
    setStatus('');
  };

  return (
    <Container fluid style={{ background: 'linear-gradient(to right, #213a5c, #0e2038, #213a5c)', minHeight: '92.3vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-8 mt-5">
          <div className="card">
            <div className="card-header">
              <h1>Contact Me</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="row g-3 align-items-center mb-3">
                  <div className="col-auto">
                    <label htmlFor="countryCode" className="form-label">Phone Number</label>
                  </div>
                  <div className="col-auto">
                    <select
                      className="form-select"
                      id="countryCode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      {Object.entries(CountryCode).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-auto">
                    <label htmlFor="phoneNumber" className="form-label"></label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                {status && <p>{status}</p>}
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: '#2E2E2E' }}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;