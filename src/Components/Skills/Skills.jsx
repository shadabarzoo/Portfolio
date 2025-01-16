import React from 'react';
import './Skills.css'; // Importing the CSS file for styling
import htmlImg from'../../Assets/html.png';
import cssImg from'../../Assets/css.png';
import jsImg from'../../Assets/js.png';
import bsImg from'../../Assets/bs.png';
import reactImg from'../../Assets/react.png';
import pyImg from'../../Assets/py.png';
import sqlImg from'../../Assets/sql.png';
import mongoImg from'../../Assets/mongo.png';
import canvaImg from'../../Assets/canva.png';

const Skills = () => {
  const skillsList = [
    { name: 'HTML', image: htmlImg },
    { name: 'CSS', image: cssImg },
    { name: 'JavaScript', image: jsImg },
    { name: 'Bootstrap', image: bsImg },
    { name: 'React', image: reactImg },
    { name: 'Python', image: pyImg },
    { name: 'SQL', image: sqlImg },
    { name: 'MongoDB', image: mongoImg },
    { name: 'Canva', image: canvaImg },
  ];

  return (
    <div className="skill-container-main">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image} alt={skill.name} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
