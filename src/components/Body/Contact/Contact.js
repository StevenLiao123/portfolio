import React from 'react';

import ContactForm from './ContactForm';

export default () => <div className="row px-5 py-5 bg-info text-white">
    <div className="col-lg-4">
        GoogleMap
    </div>
    <div className="col-lg-4">
        <ContactForm />
    </div>
    <div className="col-lg-4">
        Weather
    </div>
</div>;
 
