import React from 'react';
import "./Projects.css";
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    return (
        <div className='card-body'>
            <h2 className='card-heading'>{project.title}</h2>
            <div className="card-body2">
                <div className='card-tech'>
                    <span className='tech-stack'>Tech Stack</span>: {project.tech_stack}
                </div>
                <div>{project.tasks[0]}</div>
                <div className="links">
                    <div><a target="_blank" href={project.github_repo}>Github Repo</a></div>
                    <div><Link>See More Details</Link></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard