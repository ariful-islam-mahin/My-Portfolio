import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import ProjectsData from './ProjectsData';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(ProjectsData)
    }, [])
    return (
        <div id="projects" className="text-center px-5 container">
            <h1 className="mt-5">Projects</h1>
            <div className="row py-4">
                {
                    projects.map((project, idx) => <Project key={idx} project={project}/>)
                }
            </div>
        </div>
    );
};

export default Projects;