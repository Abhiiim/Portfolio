import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

import './Home.css';
import img from "../../img/home.jpg";
import ProjectCard from '../Projects/ProjectCard';
import { projects } from '../../js/projects';
import { intern } from '../../js/intern';
import Skills from '../Skills/Skills';
import InternCard from '../Intern/InternCard';

function Home() {
  useEffect(() => {
    const options = {
      strings: ["Software Development.", "Web Development."],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    const typed = new Typed('#typed-text', options);

    return () => {
      // Clean up the Typed.js instance when the component unmounts
      typed.destroy();
    };
  }, []);

  return (
    <div className='home-container'>
      <div className="container-img">
        <img src={img} alt="image" className='home-image' />
        <div className="text-overlay">
          <div className='home-intro'>Hello, My name is Abhishek</div>
          <div className='home-intro'>I am passionate about</div>
          <span id="typed-text" className='home-intro'></span>
          <div className="resume">
            <a className='resume-link' target='_blank' href="https://drive.google.com/file/d/1iFeBgzC733ac_owjyr5XIOLhSG_RNSbh/view">My Resume</a>
            <Link className='know-more'>Know More About Me</Link>
          </div>
        </div>
      </div>

      <div className="intern-section">
        <h1>My Internships</h1>
        <div className="internships">
          <InternCard intern={intern[0]} />
          <InternCard intern={intern[1]} />
        </div>
      </div>

      <div className="projects-section">
        <h1 style={{color: "white"}}>My Projects</h1>
        <div className='projects'>
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[3]} />
        </div>
        <Link to='/projects' className='all-projects'>See All Projects</Link>
      </div>

      <div className="skills-section" id='skills-section'>
        <Skills />
      </div>
    </div>
  )
}

export default Home;