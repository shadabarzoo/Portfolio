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
        'Designed, developed, and deployed scalable software applications in collaboration with senior engineers.',
        'Conducted code reviews to ensure high-quality, efficient, and maintainable code. ',
        'Created comprehensive technical documentation, including user guides, to enhance software usability and understanding.',
        'Worked closely with cross-functional teams to integrate and optimize software solutions across diverse environments.',
      ],
    },
    {
      role: 'Mobile App Development using Flutter',
      company: 'Learn and Build',
      duration: 'May 2023 - July 2023',
      achievements: [
        'Skills Learnt : Flutter, Dart, APIs',
        'Designed and developed mobile applications using Flutter, gaining hands-on experience in cross-platform app development.',
        ' Built an e-commerce application for Dairy Milk products, integrating Firebase for real-time database management and API calls to fetch dynamic data and images. ',
        ' Implemented key features such as product selection, automated price calculation, and intuitive navigation to enhance user experience. ',
      ],
    },
    {
      role: 'Inhouse Training Web Development',
      company: 'Jodhpur Institute of Engineering and Technology',
      duration: 'May 2022 - June 2022',
      achievements: [
        'Skills Learnt : HTML5, CSS3',
        'Developed an e-commerce platform for Dairy Milk products with Firebase integration for real-time data management.',
        'Implemented automated price calculation to enhance efficiency and streamline the user experience.',
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
