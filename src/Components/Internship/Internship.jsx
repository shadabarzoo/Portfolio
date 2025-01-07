import React from 'react';
import './Internship.css'; // Importing the CSS file for styling

const Internship = () => {
  const internships = [
    {
      role: 'Cloud Infra and Security Intern',
      company: 'Celebal Technology',
      duration: 'May 2023 - September 2023',
      achievements: [
        'Skills Learnt : Azure',
        'Engineered and maintained software solutions, increasing system efficiency by 15%.',
        'Reduced processing time by 10 hours per week.',
        'Lowered error rates by 10% and improved user satisfaction by 12%.',
        'Leveraged Java to develop scalable applications, supporting over 5,000 daily users.',
      ],
    },
    {
      role: 'Mobile App Development using Flutter',
      company: 'Learn and Build',
      duration: 'May 2023 - July 2023',
      achievements: [
        'Skills Learnt : Flutter, Dart',
        'Designed an e-commerce Application for Dairy Milk products with Firebase integration.',
        'Enabled automatic price calculation and streamlined user experience.',
        'Connected payment gateway for smooth transaction',
      ],
    },
    {
      role: 'Inhouse Training Web Development',
      company: 'Jodhpur Institute of Engineering and Technology',
      duration: 'May 2022 - June 2022',
      achievements: [
        'Skills Learnt : HTML5, CSS3',
        'Designed an e-commerce website for Dairy Milk products with Firebase integration.',
        'Enabled automatic price calculation and streamlined user experience.',
      ],
    },
  ];

  return (
    <div className="internship-container-main">
      <h2>My Internships</h2>
      <div className="internship-container">
      <div className="internships-list">
        {internships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <h3 className='role'>{internship.role}</h3>
            <p className="company-name">{internship.company}</p>
            <p className="duration">{internship.duration}</p>
            <ul className="achievements">
              {internship.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Internship;
