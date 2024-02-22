import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const CountryCode = {
  '': 'Select Country Code',
  '+1': 'United States',
  '+44': 'United Kingdom',
  '+61': 'Australia',
  '+977': 'Nepal',
  '+91': 'India',
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
  
    // Log the form data
    console.log('Form Data:', {
      email,
      phoneNumber,
      countryCode,
      message
    });
  
    // Reset the form fields and status
    setEmail('');
    setPhoneNumber('');
    setCountryCode('');
    setMessage('');
    setStatus('');
  };  

  return (
    <Container fluid style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="card mt-5">
            <div className="card-header" style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)'}}>
              <h1 className='text-white'>Contact Me</h1>
            </div>
            <div className="card-body text-white" style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)'}}>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control text-white"
                    style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)'}}
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
                      className="form-select text-white"
                      style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)'}}
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
                      className="form-control text-white"
                      style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)'}}
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3" style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)', padding: '10px', borderRadius: '5px' }}>
                  <label htmlFor="message" className="form-label text-white">Message</label>
                  <textarea
                    className="form-control"
                    style={{ 
                      backgroundColor: 'transparent', // Make textarea background transparent
                      color: 'white',
                      width: '100%', // Ensure the textarea takes up full width
                    }}
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                {status && <p>{status}</p>}
                <button type="submit" className="btn btn-primary btn-lg fw-bold text-white" style={{ backgroundColor: '#213a5c' }}>Send Message</button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
