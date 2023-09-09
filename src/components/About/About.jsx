import React from 'react';
import abhishek from "../../img/abhishek2.jpg";
import "./About.css";

function About() {
    return (
        <div className='about-container'>
            <img className='profile-image' src={abhishek} alt="Abhishek" />
            <h1 className='profile-name'>Abhishek Kumar</h1>
            <div className='about'>
                Hey there, I'm Abhishek Kumar, a recent graduate from the renowned Indian Institute of Technology (IIT) Delhi. I've just stepped into the world of software development, and I'm excited to embark on this incredible journey.
                <br/><br/>
                During my time at IIT Delhi, I had the opportunity to gain practical experience through two enriching internships. These experiences have shaped my perspective and fueled my passion for software development. I also took on various projects during my academic years, focusing on data structures and web development. I'm proud of the skills I've cultivated, which include proficiency in programming languages like C++, JavaScript, Java, Python, SQL, HTML, CSS and tools and framework like React.js, Node.js, Redux.js, Git/Github, MongoDB, Bootstrap, Django, VS Code.
                <br/><br/>
                Beyond the code and algorithms, there's more to me. I'm not just a tech enthusiast but also a sports lover. Badminton and cricket are my go-to sports for unwinding and staying active. When I'm not on the field or coding, you'll find me indulging in my love for movies. There's something magical about getting lost in a good film.
                <br/><br/>
                I see coding as more than just a career; it's a hobby and a creative outlet for me. With a strong educational background, a toolkit of diverse skills, and an insatiable curiosity, I'm eager to make my mark in the vast landscape of software development. This is just the beginning, and I can't wait to see where this journey takes me as I continue to grow in the ever-evolving tech industry.

            </div>
        </div>
    )
}

export default About