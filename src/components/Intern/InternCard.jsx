import React from 'react';

import "./Intern.css";

function InternCard({ intern }) {
  return (
    <div className="intern-body">
        <h2 className="company">{intern.company}</h2>
        <div className='intern-body2'>
            <div className="location">
                <span className='tech-stack'>Location</span>: {intern.location}
            </div>
            <div className="role">
                <span className='tech-stack'>Role</span>: {intern.role}
            </div>
            <div className="intern-tech">
                <span className='tech-stack'>Tech Stack</span>: {intern.tech_stack}
            </div>
            {intern.tasks.map((task, index) => {
                return <div className='task' key={index}>{task}</div>
            })}
        </div>
    </div>
  )
}

export default InternCard