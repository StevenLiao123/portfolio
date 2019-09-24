import React from 'react';

import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

export default () => <div className="row px-5 py-5 bg-dark text-white" id="contactme">
    <div className="col-lg-4">
        GoogleMap
    </div>
    <div className="col-lg-4">
        <ContactForm />
    </div>
    <div className="col-lg-4">
        <SocialMedia />
    </div>
</div>;
 
