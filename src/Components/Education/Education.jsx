import React from 'react';
import './Education.css'; // Importing the CSS file for styling

const Education = () => {
  const education = [
    {
      role: 'BTech in Computer Science and Engineering',
      collage: 'Jodhpur Institute of Engineering and Technology',
      duration: 'August 2021 - May 2025',
      marks: ['8.0 CGPA'],
    },
    {
      role: 'High School',
      collage: 'Makhdum Baksh Memorial',
      duration: 'April 2019 - Feb 2021',
      marks: ['75 Perct'],
    },
    {
      role: 'School',
      collage: 'Notre Dame Public School',
      duration: 'Till  March 2019',
      marks: ['79 Perct'],
    },
  ];

  return (
    <div className="education-container-main">
      <h2>My Education</h2>
      <div className="education-container">
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3 className='role'>{edu.role}</h3>
            <p className="collage-name">{edu.collage}</p>
            <p className="duration">{edu.duration}</p>
            <div className="marks">
                {edu.marks.map((mark, markIndex) => (
                  <button key={markIndex} className="mark-button">
                    {mark}
                  </button>
                ))}
              </div>
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Education;
