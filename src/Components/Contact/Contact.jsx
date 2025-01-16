import React from 'react';
import './Contact.css';  // Importing the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container-main">
      <h2>Contact Me</h2>
      <div className="contact-container">
      <p>If you'd like to get in touch, feel free to reach out to me through any of the following methods:</p>
      
      <div className="contact-details">
        <div className="contact-item">
          <div className="block">
          <h3>Email</h3>
          <i class="fa-solid fa-envelope"></i>
          </div>
          <p>shadabarzoo6@gmail.com</p>
        </div>
        
        <div className="contact-item">
          <div className="block">
          <h3>Phone</h3>
          <i class="fa-solid fa-phone-flip"></i>
          </div>
          <p>+91 8271965614</p>
        </div>
        
        <div className="contact-item">
          <div className="block">
          <h3>LinkedIn</h3>
          <i class="fa-brands fa-linkedin"></i>
          </div>
          <p><a href="https://www.linkedin.com/in/shadabarzoo" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a></p>
        </div>
        
        <div className="contact-item">
          <div className="block">
          <h3>GitHub</h3>
          <i class="fa-brands fa-github"></i>
          </div>
          <p><a href="https://github.com/shadabarzoo" target="_blank" rel="noopener noreferrer">Visit my GitHub</a></p>
        </div>

        <div className="contact-item">
          <div className="block">
          <h3>Instagram</h3>
          <i class="fa-brands fa-instagram"></i>
          </div>
          <p><a href="https://www.instagram.com/wrty_fighter/" target="_blank" rel="noopener noreferrer">Visit my Instagram</a></p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
