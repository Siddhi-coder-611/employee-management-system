import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtext">We'd love to hear from you. Please fill out the form below.</p>
      
      <div className="form-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdaw3SlkgWRLBRHf-WLC26FwXXQ66E_AbWKoya1Ov8PRKW25g/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Contact Form"
        >
          लोड होत आहे...
        </iframe>
      </div>
    </div>
  );
}

export default Contact;
