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
                {project.tasks.map((task, index) => {
                    return <div className='project-task' key={index}>{task}</div>
                })}
                <div className="links">
                    <a target="_blank" href={project.github_repo}>Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard