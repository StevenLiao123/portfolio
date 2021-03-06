import React from 'react';
import './SocialMedia.css';

export default () => <div className="card-panel blacken-4 white-text">
    <i className="envelope fa fa-envelope-square fa-5x mb-3"></i>
    <p className="mb-3">Or you can email me directly at: <br /> stevenliao19900326@gmail.com</p>
    <div className="row social-icons">
        <div className="col-4">
            <a href="https://github.com/StevenLiao123" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-4x"></i></a>
        </div>
        <div className="col-4">
            <a href="https://www.linkedin.com/in/steven-liao-a36330103/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-4x"></i></a>
        </div>
        <div className="col-4">
            <a href="https://www.facebook.com/profile.php?id=100006452463501" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-4x"></i></a>
        </div>
    </div>
</div>;