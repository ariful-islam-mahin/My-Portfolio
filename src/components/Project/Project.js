import React from 'react';

const Project = ({project}) => {
    const {title, picture, description, features, github, website} = project;
    return (
        <div className="col-md-4 mb-4">
            <div className="border rounded pb-3 bg-dark text-white">
                <img className="w-100" src={picture} alt=""/>
                <h4 className="mt-2">{title}</h4>
                <p className="mb-1">{description}</p>
                <p>{features}</p>
                <a className="btn btn-outline-primary px-5 btn-sm mt-3" href={website} target="_blank">Website</a>
                <br/>
                <a className="btn btn-primary px-5 btn-sm mt-1" href={github} target="_blank">GitHub</a>
            </div>
        </div>
    );
};

export default Project;