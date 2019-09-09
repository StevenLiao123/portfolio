import React from 'react';
import './Projects.css';

export default () => <div className="projects px-5 py-5" id="projects">
    <div className="project-content mt-5 mb-5">
        <h1>My Projects</h1>
        <p>_____________________________</p>
    </div>

    <div className="row project-row1 justify-content-around">
        <div className="project-chartjs col-md-4 shadow">
            <img src="assets/images/projects/chartjs-1.png" className="card-img-top" alt="chartjs-1"  />
            <div className="card-body">
                <a href="/" className="btn btn-primary">Details</a>
            </div>
        </div>
        <div className="currency-converter col-md-4 shadow">
            <img src="assets/images/projects/currency-converter.png" className="card-img-top" alt="currency-converter" />
            <div className="card-body">
                <a href="/" className="btn btn-primary">Details</a>
            </div>
        </div>
    </div>

    <div className="row project-row2 justify-content-around">
        <div className="homepage col-md-4 shadow">
            <img src="assets/images/projects/website-1.png" className="card-img-top" alt="homepage" />
            <div className="card-body">
                <a href="/" className="btn btn-primary">Details</a>
            </div>
        </div>
        <div className="burger col-md-4 shadow">
            <img src="assets/images/projects/burger-1.png" className="card-img-top" alt="burger-1" />
            <div className="card-body">
                <a href="/" className="btn btn-primary">Details</a>
            </div>
        </div>
    </div>
</div>;