import React from 'react';
import './MainPage.css';
import Typist from 'react-typist';

export default () => <div className="section">
    <div className="video-container">
        <div className="overlay"></div>
        <video className="video1" src="assets/videos/background-office.mp4" poster="assets/images/video-background.png" autoPlay loop muted>
            Your browser does not support this video, please check it
        </video>
    </div>

    <div className="content text-center">
        <Typist>
            <h1>Steven Liao</h1> 
            <h2>Front-End Developer</h2>
            <p>HTML/CSS | JavaScript | BootStrap | ReactJS | NodeJS | MySQL ...</p>
        </Typist>
    </div>
</div>;