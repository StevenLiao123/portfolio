import React from 'react';
import './Projects.css';

export default () => <div className="projects px-5 py-5" id="projects">
    <div className="project-content mt-5 mb-5">
        <h1><strong>My Projects</strong></h1>
        <p>_____________________________</p>
    </div>

    <div className="row project-row1 justify-content-around">
        <div className="project-content-management-system col-md-4 shadow">
            <img src="assets/images/projects/content-management-system.png" className="card-img-top" alt="content-management-system" />
            <div className="card-body">
                <h4><strong>Content Managment System</strong></h4>
                <p>The MERN-based content management system application</p>
                <a className="btn btn-info mb-3" href="https://github.com/StevenLiao123/Content-Management-System" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="btn btn-info mb-3" href="https://floating-beyond-26711.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
        <div className="project-weather-widget col-md-4 shadow">
            <img src="assets/images/projects/weather-widget.png" className="card-img-top" alt="weather-widget" />
            <div className="card-body">
                <h4><strong>Weather Widget</strong></h4>
                <p>The real-time weather widget application used to show the temperature, name, wind speed and wind direction based on the user's current location </p>
                <a className="btn btn-info mb-3" href="https://github.com/StevenLiao123/weather-widget" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="btn btn-info mb-3" href="https://weather-widget-project.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
    </div>

    <div className="row project-row2 justify-content-around">
        <div className="project-chartjs col-md-4 shadow">
            <img src="assets/images/projects/chartjs-1.png" className="card-img-top" alt="chartjs-1" />
            <div className="card-body">
                <h4><strong>Data-charts Web</strong></h4>
                <p>The React-based application shows polar area chart, line chart, dynamic cards and table.</p>
                <a className="btn btn-info mb-3" href="https://github.com/StevenLiao123/dotter-coding-test" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="btn btn-info mb-3" href="https://stevenliao123.github.io/dotter-coding-test" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
        <div className="currency-converter col-md-4 shadow">
            <img src="assets/images/projects/currency-converter.png" className="card-img-top" alt="currency-converter" />
            <div className="card-body">
                <h4><strong>Currency-Converter</strong></h4>
                <p>The currency-converter that is designed to convert one currency into another in order to check its corresponding value. </p>
                <a className="btn btn-info mb-3" href="https://github.com/StevenLiao123/Currency-Converter" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="btn btn-info mb-3" href="https://www.google.com.au" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
    </div>
</div>;
