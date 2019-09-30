import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkTo, animateScroll as scroll } from 'react-scroll';
import './Header.css';

class Header extends Component {
    scrollTo = () => {
        scroll.scrollTo(100);
    }

    handleSetActive = (to) => {
        console.log(to);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md px-5 py-3 navbar-dark fixed-top">
                <a className="navbar-brand" href="/"><img src="/portfolio/assets/images/nav/superman.jpg" className="img-fluid" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto pb-3">
                        <li className="nav-item pb-3">
                            <Link className="nav-link text-primary" to="resume">RESUME</Link>
                        </li>
                        <li className="nav-item pb-3">
                            <LinkTo className="nav-link text-primary" to="projects" spy={true} smooth={true} duration={500}>
                                PROJECTS
                            </LinkTo>
                        </li>
                        <li className="nav-item pb-3">
                            <LinkTo className="nav-link text-primary" to="aboutme" spy={true} smooth={true} duration={500}>
                                ABOUT ME
                            </LinkTo>
                        </li>
                        <li className="nav-item pb-3">
                            <LinkTo className="nav-link text-primary" to="contactme" spy={true} smooth={true} duration={500}>
                                CONTACT
                            </LinkTo>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;