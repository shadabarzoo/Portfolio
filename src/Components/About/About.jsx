import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './About.css'; // Importing the CSS file for styling
import image from '../../Assets/about-img.png';

const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'A Software Engineer',
        'A Front End Developer',
        'A Full Stack Developer',
        'A Web Developer',
        'A Mobile App Developer',
        'A Problem Solver',
      ],
      typeSpeed: 50, // Speed of typing
      backSpeed: 25, // Speed of backspacing
      loop: true, // Loop the typing effect
      showCursor: true, // Show blinking cursor
      cursorChar: '|', // Customize the cursor character
    };

    typedRef.current = new Typed('.fed', options);

    return () => {
      typedRef.current.destroy(); // Cleanup the animation on component unmount
    };
  }, []);

  return (
    <div className="about-container-main">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-info">
          <h3>Hello,</h3>
          <div className="name">
            <span className="im">I'm</span>
            <span className="shadabarzoo">Shadab Arzoo</span>
          </div>
          <span className="fed"></span> {/* Typing animation container */}

          <p className="myself">
            Specialized in creating dynamic and responsive websites and applications. With a strong foundation in
            frontend technologies such as React, HTML, CSS, and JavaScript, I am continuously learning and improving
            my skills to stay updated with the latest trends in development. My goal is to craft user-friendly,
            high-performance solutions that meet both functional and aesthetic requirements.
          </p>

          <div className="button">
            <div className="hire-me">
              <button
                className="hireme"
                onClick={() =>
                  window.location.href = "mailto:shadabarzoo6@gmail.com"
                }
              >
                Hire Me
              </button>
            </div>
            <div className="resume">
              <a
                href="https://shadabarzoo.github.io/Portfolio/resume.pdf"  // Correct path for GitHub Pages (starting with '/Portfolio' for your repo)
                download="Shadab_Arzoo_Resume.pdf"  // Name of the file when downloading
                className="resume-link"
              >
                <button className="resume">Download Resume</button>
              </a>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={image} alt="Shadab Arzoo" />
        </div>
      </div>
    </div>
  );
};

export default About;
