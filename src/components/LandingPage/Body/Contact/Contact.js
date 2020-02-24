import React from 'react';

import GoogleMap from './GoogleMap';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';
import './Contact.css';

export default () => <div className="contact px-5 py-5 bg-dark text-white" id="contactme">
    <div className="col-lg-4 google-map">
        <GoogleMap />
    </div>
    <div className="col-lg-4 col-md-6">
        <ContactForm />
    </div>
    <div className="col-lg-4 col-md-6">
        <SocialMedia />
    </div>
</div>;
 
