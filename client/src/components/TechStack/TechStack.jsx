import React from 'react';
import './TechStack.scss';

function TechStack() {
  return (
    <div className="tech-stack">
      <h2>TechStack</h2>
      
      <div className="cards-container">
        {/* Front-End Tech Stack */}
        <div className="tech-card">
          <h3>Front-End</h3>
          <ul>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </div>

        {/* Back-End Tech Stack */}
        <div className="tech-card">
          <h3>Back-End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        {/* Cloud Services Tech Stack */}
        <div className="tech-card">
          <h3>Cloud Services</h3>
          <ul>
            <li>AWS</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Microsoft Azure</li>
          </ul>
        </div>

        {/* Databases Tech Stack */}
        <div className="tech-card">
          <h3>Databases</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Programming Languages */}
        <div className="tech-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Terraform</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
