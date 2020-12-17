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
            <h2>Software Engineer</h2>
            <p>HTML/CSS | JavaScript | TypeScript | ReactJS | NodeJS | GraphQL | MySQL | MongoDB | AWS...</p>
        </Typist>
    </div>
</div>;