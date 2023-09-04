import React from 'react';

import "./Skills.css";
import { programming } from "../../js/skills";
import { tools } from '../../js/skills';
import AnimatedBox from './AnimatedBox';

function Skills() {
  return (
    <div className='skills-container'>
      <h1>My Skills</h1>
      <div className="skills-body">
        <div className="programming">
          <h2>Programming Languages</h2>
          {programming.map((item, index) => {
            return (
              <div key={index} className="skills-element">
                <div>{item.language}</div>
                <AnimatedBox targetWidth={item.proficiency} />
              </div>
            )
          })}
        </div>
        <div className="tools">
          <h2>Tools & Technology</h2>
          {tools.map((item, index) => {
            return (
              <div key={index} className="skills-element">
                <div>{item.framework}</div>
                <AnimatedBox targetWidth={item.proficiency} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills;