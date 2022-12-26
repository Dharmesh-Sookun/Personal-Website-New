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
            <h4>Software Developer - UK Payroll</h4>
            <h5>Dec 2022 - Present</h5>
            <p>
              <em>Ceridian Mauritius Ltd</em>
            </p>
            <ul>
              <li>
                Involve in developing Payroll functionalities for UK clients
              </li>
              <li>Involve in development, unit testing, automation testing</li>
              <li>
                Involve development (frontend & backend), unit testing,
                automation testing
              </li>
              <li>Works with .NET framework</li>
            </ul>
          </div>
          <div className="item">
            <h4>Software Developer - MAU Payroll</h4>
            <h5>May 2022 - Dec 2022</h5>
            <p>
              <em>Ceridian Mauritius Ltd</em>
            </p>
            <ul>
              <li>
                Involve in developing Payroll functionalities for MAU clients
              </li>
              <li>Involve in development, unit testing, automation testing</li>
              <li>
                Involve development (frontend & backend), unit testing,
                automation testing
              </li>
              <li>Works with .NET framework</li>
            </ul>
          </div>
          <div className="item">
            <h4>Assoc Software Developer - MAU Payroll</h4>
            <h5>Sept 2021 - May 2022</h5>
            <p>
              <em>Ceridian Mauritius Ltd</em>
            </p>
            <ul>
              <li>
                Involve in developing Payroll functionalities for MAU clients
              </li>
              <li>Involve in development, unit testing, automation testing</li>
              <li>
                Involve development (frontend & backend), unit testing,
                automation testing
              </li>
              <li>Works with .NET framework</li>
            </ul>
          </div>
          <h3>Professional Certifications</h3>
          <div className="item">
            <h4>Microsoft Data Fundamentals (DP-900)</h4>
            <h5>2022</h5>
            <p>
              <em>
                Solid understanding of core data concepts, such as relational
                data, nonrelational <br /> data, big data, and analytics. Plus,
                familiarity with the roles, tasks, and <br /> responsibilities
                in the world of data and data analytics.
              </em>
            </p>
            <a
              href="https://www.credly.com/badges/e6f35f2c-e00d-4164-b2ca-0cf0f30559ed/public_url"
              rel="noopener noreferrer"
              target="_blank"
            >
              View here
            </a>
          </div>
          <div className="item">
            <h4>Microsoft Azure Fundamentals (AZ-900)</h4>
            <h5>2021</h5>
            <p>
              <em>
                Foundational level knowledge of cloud services and how those
                services <br /> are provided with Microsoft Azure.
              </em>
            </p>
            <a
              href="https://www.credly.com/badges/4adb3be6-7194-4808-8b60-8fcc1cfc672e"
              rel="noopener noreferrer"
              target="_blank"
            >
              View here
            </a>
          </div>
          <div className="item">
            <h4>IBM Artificial Intelligence Analyst - Mastery Award 2019</h4>
            <h5>2020</h5>
            <p>
              <em>
                Knowledge on how to apply machine learning algorithms and build{' '}
                <br />
                AI solutions by using IBM Watson.
              </em>
            </p>
            <a
              href="https://www.credly.com/badges/600f8bd4-44f2-48ef-ba7a-59e3b8355dca"
              rel="noopener noreferrer"
              target="_blank"
            >
              View here
            </a>
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Resume;
