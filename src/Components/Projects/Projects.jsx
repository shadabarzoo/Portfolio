import React from 'react';
import './Projects.css'; // Importing the CSS file for styling

const Projects = () => {
  const projectList = [
    {
      name: 'The Bridal Bloom',
      description: 'A responsive e-commerce website for selling bridal clothing designs.',
      link: 'https://github.com/shadabarzoo/TheBridalBloom',
      skills: ['React', 'MongoDB'], // Skills as an array
    },
    {
      name: 'GymFluencer',
      description: 'A gym management system frontend with features like membership plans and class schedules.',
      link: 'https://shadabarzoo.github.io/GymFluencer/',
      skills: ['React'], // Skills as an array
    },
    {
      name: 'Spotify Clone',
      description: 'A replica of Spotify’s UI with functionalities for playlists and trending songs.',
      link: '#', // Replace with actual link if available
      skills: ['HTML','CSS', 'JavaScript'],
    },
    {
      name: 'Weather App',
      description: 'A React-based weather application providing weather updates via API integration.',
      link: '#', // Replace with actual link if available
      skills: ['Flutter', 'API Integration'],
    },
    {
      name: 'Dairy Milk',
      description: 'An Android application for Dairy Milk, an e-commerce app.',
      link: 'https://github.com/shadabarzoo/DairyMilk', // Replace with actual link if available
      skills: ['Flutter', 'Firebase'],
    },
  ];

  return (
    <div className="projects-container-main">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className='pName'>{project.name}</h3>
              <p>{project.description}</p>
              <div className="skills">
                {project.skills.map((skill, skillIndex) => (
                  <button key={skillIndex} className="skill-button">
                    {skill}
                  </button>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
