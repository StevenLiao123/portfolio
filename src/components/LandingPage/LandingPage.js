import React, { Component } from 'react';
import './LandingPage.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class LandingPage extends Component {
  render(){
    return (
      <div className="langding-page">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;