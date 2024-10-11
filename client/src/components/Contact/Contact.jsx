import React from 'react';
import './Contact.scss'; // Import the styling file

function Contact() {
  return (
    <div className="contact-links">
      <h2>Connect with Me</h2>
      <div className="links-container">
        {/* Resume */}
        <a 
          href="https://yourwebsite.com/path-to-your-resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-button"
        >
          <img src="/images/resume-logo.png" alt="Resume" />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/kbains09" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-button"
        >
          <img src="/images/github-logo.png" alt="GitHub" />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/kirat-bains/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-button"
        >
          <img src="/images/linkedin-logo.png" alt="LinkedIn" />
        </a>

        {/* API Docs */}
        <a 
          href="https://api.yourwebsite.com/docs" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-button"
        >
          <img src="/images/api-logo.png" alt="API Docs" />
        </a>

        {/* Email Me */}
        <a 
          href="mailto:kiratbains09@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-button"
        >
          <img src="/images/email-logo.png" alt="Email Me" />
        </a>

        {/* Dev.to */}
        <a 
          href="https://dev.to/kbains09" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-button"
        >
          <img src="/images/devto-logo.png" alt="Dev.to" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
