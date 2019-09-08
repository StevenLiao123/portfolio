import React from 'react';
import './LandingPage.css';

export default () => <div className="section">
    <div className="video-container">
        <div className="overlay"></div>
        <video className="video1" src="assets/videos/background-office.mp4" autoPlay loop muted>
            Your browser does not support this video
        </video>
    </div>
    
    <div className="content text-center">
        <h1>Steven Liao</h1>
        <p className="title">Front-End Developer</p>
        <p>HTML/CSS | JavaScript | BootStrap | ReactJS | NodeJS | MySQL ...</p>
        <a href="#projects" className="btn btn-primary">My projects -></a>
    </div>
</div>;
