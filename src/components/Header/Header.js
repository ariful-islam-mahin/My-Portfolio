import React from 'react';
import './Header.css';
import resume from '../../Resume.pdf'

const Header = () => {
    return (
        <div id="home" className="header text-center bg-dark text-white">
            <h1>MD Ariful Islam Mahin</h1>
            <h5 className="text-secondary">Front End Developer</h5>
            <a href={resume} download="ArifulIslamMahinResume" className="btn btn-primary" >Download Resume</a>
        </div>
    );
};

export default Header;