import React from 'react'
import ProjectCard from './ProjectCard'

import "./Projects.css";
import { projects } from '../../js/projects'

function Projects() {
  return (
    <div className='projects-container'>
      <h1 className='project-heading'>My Projects</h1>
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <ProjectCard project={project} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects