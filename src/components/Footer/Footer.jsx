import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-container" id='footer-section'>
            <div className='footer'>
                <div className="left-footer">
                    <div className='contact'>Contact me</div>
                    <div className='contact'>Mobile: +91 7970438726, 6205208145</div>
                    <div className='contact'>Email: abhishekkumar500a@gmail.com</div>
                </div>
                <div className="right-footer">
                    <div className='contact'>Get in touch</div>
                    <div className="social contact">
                        <a href="https://www.linkedin.com/in/abhishek-kumar-53b1141b3/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
                        </a>
                        <a href="https://github.com/Abhiiim" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon github" />
                        </a>
                        <a href="https://www.instagram.com/akeshibh/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
                        </a>
                        <a href="https://twitter.com/Abhiiim05" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright. All rights reserved.</div>
        </div>
    )
}

export default Footer;