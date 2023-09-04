import React, { useEffect } from 'react';
import Typed from 'typed.js';

import './Home.css';
import img from "../../img/home.jpg";
import ProjectCard from '../Projects/ProjectCard';
import { projects } from '../../js/projects'
import { Link } from 'react-router-dom';
import Skills from '../Skills/Skills';

function Home() {
  useEffect(() => {
    const options = {
      strings: ["Software Development", "Web Development."],
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
        </div>
      </div>
      <div className="projects-section">
        <h1 style={{color: "white"}}>My Projects</h1>
        <div className='projects'>
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[1]} />
        </div>
        <Link to='/projects' className='all-projects'>See All Projects</Link>
      </div>
      <div className="skills-section">
        <Skills />
      </div>
    </div>
  )
}

export default Home;