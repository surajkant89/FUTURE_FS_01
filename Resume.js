import React from 'react';
import './Resume.css';

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/path-to-resume.pdf'; // Replace with the actual path to your resume PDF
    link.download = 'Suraj_Resume.pdf';
    link.click();
  };

  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <p><strong>Name:</strong> Suraj kant</p>
        <p><strong>Email:</strong> surajkantpat@gmail.com</p>
        <p><strong>Phone:</strong> +91-620****927</p>
        <p><strong>Education:</strong> B.Tech in Computer Science from LNJPIT, chapra</p>
        <p><strong>Skills:</strong> React, Node.js, Express, MongoDB, JavaScript, HTML, CSS</p>
        <p><strong>Experience:</strong> 1 years as a Full Stack Developer</p>
        <p><strong>Projects:</strong> Portfolio Website, Weather Dashboard, Payment Gateway Integration</p>
      </div>
      <button onClick={handleDownload} className="download-button">Download Resume</button>
    </section>
  );
}

export default Resume;