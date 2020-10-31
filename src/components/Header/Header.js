import React from 'react';
import './Header.css';
import resume from '../../Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div id="home" className="header text-center bg-dark text-white">
            <h1>MD Ariful Islam Mahin</h1>
            <h5 className="text-secondary">Front End Developer</h5>
            <a href="https://www.facebook.com/arifulislam.mahin.718689" target="_blank">
                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
            </a>
            <a href="https://www.linkedin.com/in/ariful-islam-mahin/" target="_blank">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/ariful-islam-mahin" target="_blank">
                <FontAwesomeIcon className="icon" icon={faGithubSquare} />
            </a>
            <br/>
            <a href={resume} download="ArifulIslamMahinResume" className="btn btn-primary" >Download Resume</a>
        </div>
    );
};

export default Header;