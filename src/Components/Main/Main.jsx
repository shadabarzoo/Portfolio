import React from 'react';
import About from './About'; // Make sure to create these components
import Internship from './Internship';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => {
  return (
    <div className="main-container">
      {/* Section for About */}
      <section id="about">
        <About />
      </section>

      {/* Section for Internship */}
      <section id="internship">
        <Internship />
      </section>

      {/* Section for Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Section for Contact */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Main;
