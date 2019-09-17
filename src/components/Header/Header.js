import React from 'react';
import './Header.css';

export default () => <nav className="navbar navbar-expand-md navbar-dark dotterNav fixed-top px-5 py-3">
    <a className="navbar-brand" href="/"><img src="/assets/images/nav/superman.jpg" className="img-fluid" alt="dotter-logo" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto pb-3">
            <li className="nav-item pb-3">
                <a className="nav-link text-white" href="#projects">PROJECTS</a>
            </li>
            <li className="nav-item pb-3">
                <a className="nav-link text-white" href="#aboutme">ABOUT ME</a>
            </li>
            <li className="nav-item pb-3">
                <a className="nav-link text-white" href="/">CONTACT</a>
            </li>
        </ul>
    </div>
</nav>