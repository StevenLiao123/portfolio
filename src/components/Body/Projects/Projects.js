import React from 'react';
import './Projects.css';

export default () => <div className="projects px-5 py-5" id="projects">
    <div className="project-content mt-5 mb-5">
        <h1><strong>My Projects</strong></h1>
        <p>_____________________________</p>
    </div>

    <div className="row project-row1 justify-content-around">
        <div className="project-chartjs col-md-4 shadow">
            <img src="assets/images/projects/chartjs-1.png" className="card-img-top" alt="chartjs-1" />
            <div className="card-body">
                <h4><strong>Data-charts Web</strong></h4>
                <p>The React-based application shows polar area chart, line chart, dynamic cards and table.</p>
                <a className="btn btn-info mr-3" href="https://github.com/StevenLiao123/dotter-coding-test" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="btn btn-info mr-3" href="https://stevenliao123.github.io/dotter-coding-test" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
        <div className="currency-converter col-md-4 shadow">
            <img src="assets/images/projects/currency-converter.png" className="card-img-top" alt="currency-converter" />
            <div className="card-body">
                <h4><strong>Currency-Converter</strong></h4>
                <p>The currency-converter that is designed to convert one currency into another in order to check its corresponding value. </p>
                <a className="btn btn-info mr-3" href="https://github.com/StevenLiao123/Currency-Converter" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    </div>

    <div className="row project-row2 justify-content-around">
        <div className="homepage col-md-4 shadow">
            <img src="assets/images/projects/website-1.png" className="card-img-top" alt="homepage" />
            <div className="card-body">
                <h4><strong>React-based Application</strong></h4>
                <br />
                <h5>Still developing...</h5>
            </div>
        </div>
        <div className="burger col-md-4 shadow">
            <img src="assets/images/projects/burger-1.png" className="card-img-top" alt="burger-1" />
            <div className="card-body">
                <h4><strong>Burger Builder</strong></h4>
                <p>Online course from Udemy, this application is a simulated food ordering app which allows user to pick ingredients to make up a burger.</p>
                <a className="btn btn-info mr-3" href="https://github.com/StevenLiao123/Burger" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="btn btn-info ml-3" href="https://react-my-burger-51856.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
    </div>
</div>;
