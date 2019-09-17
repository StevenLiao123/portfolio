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
                <p>Tools/libraries used in this project: create-react-app, bootStrap, chartJS</p>
                <a className="btn btn-info mr-3" href="https://github.com/StevenLiao123/dotter-coding-test" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="btn btn-info mr-3" href="https://stevenliao123.github.io/dotter-coding-test" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
        <div className="currency-converter col-md-4 shadow">
            <img src="assets/images/projects/currency-converter.png" className="card-img-top" alt="currency-converter" />
            <div className="card-body">
                <h4><strong>React-based Application</strong></h4>
                <p>Tools/libraries used in this project: bootStrap, react-router-dom, axios</p>
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
                <h4>Still developing...</h4>
            </div>
        </div>
        <div className="burger col-md-4 shadow">
            <img src="assets/images/projects/burger-1.png" className="card-img-top" alt="burger-1" />
            <div className="card-body">
                <h4><strong>React-based Burger APP</strong></h4>
                <p>Online Course from Udemy, Tools/libraries: create-react-app, redux, react-router-dom, etc </p>
                <a className="btn btn-info mr-3" href="https://github.com/StevenLiao123/Burger" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="btn btn-info ml-3" href="https://react-my-burger-51856.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </div>
    </div>
</div>;
