import React from 'react';
import './LandingPage.css';
import Typist from 'react-typist';

export default () => <div className="section">
    <div className="video-container">
        <div className="overlay"></div>
        <video className="video1" src="assets/videos/background-office.mp4" autoPlay loop muted>
            Your browser does not support this video
        </video>
    </div>

    <div className="content text-center">
        <Typist>
            <h1>Steven Liao</h1> 
            <h2>Front-End Developer</h2>
            <p>HTML/CSS | JavaScript | BootStrap | ReactJS | NodeJS | MySQL ...</p>
        </Typist>
        <a href="#projects" className="btn btn-primary">My projects -></a>
    </div>
</div>;
