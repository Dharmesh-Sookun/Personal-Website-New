import React from 'react';

import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <div className="header">
        <h2>Resume</h2>
        <div className="green-border"></div>
      </div>
      <h1>Check my resume</h1>
      <div className="resume-items-container">
        <div>
          <h3>Professional Experience</h3>
          <div className="item">
            <h4>Software Developer</h4>
            <h5>2021 - Present</h5>
            <p>
              <em>Ceridian Mauritius Ltd</em>
            </p>
            <ul>
              <li>
                Involve in developing Payroll functionalities for Mauritian
                clients
              </li>
              <li>Involve in development, unit testing, automation testing</li>
              <li>
                Involve development (frontend & backend), unit testing,
                automation testing
              </li>
              <li>Works with .NET framework</li>
            </ul>
          </div>
          <h3>Tertiary Education</h3>
          <div className="item">
            <h4>Bsc (Hons) Software Engineering</h4>
            <h5>2018 - 2021</h5>
            <p>
              <em>University of Mauritius</em>
            </p>
            <ul>
              <li>Learnt the basics of programming and website development</li>
              <li>Learnt about Artificial Intelligence and Machine Learning</li>
              <li>Learnt about the process of software development</li>
              <li>Learnt about Agile Software Development</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Secondary Education</h3>
          <div className="item">
            <h4>GCE A - Level</h4>
            <h5>2016 - 2017</h5>
            <p>
              <em>Sookdeo Bissoondoyal State College</em>
            </p>
            <p>
              Studied Mathematics, Physics and Chemistry as primary subjects{' '}
              <br /> and General Paper and Biology as sbsidiary subjects
            </p>
          </div>
          <div className="item">
            <h4>GCE O - Level</h4>
            <h5>2014 - 2015</h5>
            <p>
              <em>Sookdeo Bissoondoyal State College</em>
            </p>
            <p>
              Studied Mathematics English, French, Physics, Chemistry, Biology
              <br /> and Additional Mathemeatics
            </p>
          </div>
          <h3>Primary Education</h3>
          <div className="item">
            <h4>CPE</h4>
            <h5>2010</h5>
            <p>
              <em>Riviere du Poste Government School</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
