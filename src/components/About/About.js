import React from 'react';

import './About.css';
import UserImg from '../../images/profile-picture.png';
import Skill from '../Skill/Skill';
import Interest from '../Interest/Interest';

function About() {
  return (
    <div className="about">
      <div className="header">
        <h2>About</h2>
        <div className="green-border"></div>
      </div>
      <h1>Learn more about me</h1>
      <div className="info-container">
        <div className="image">
          <img src={UserImg} />
        </div>
        <div className="about-info">
          <h3>Software Engineer</h3>
          <p className="text-justify">
            I am a passionate software engineer with deep interest in
            programmimg, software development, website development and all the
            other activities involved during the process.
          </p>
          <div className="about-grid-container">
            <div className="birthday">
              <p>
                <span className="grid-icon">&gt; </span>
                <span className="grid-info-name">Birthday:</span> 29 June 1999
              </p>
            </div>
            <div className="age">
              <p>
                <span className="grid-icon">&gt; </span>
                <span className="grid-info-name">Age:</span>{' '}
                {new Date().getFullYear() - 1999}
              </p>
            </div>
            <div className="website">
              <p>
                <span className="grid-icon">&gt; </span>
                <span className="grid-info-name">Website:</span> www.xyz.com
              </p>
            </div>
            <div className="degree">
              <p>
                <span className="grid-icon">&gt; </span>
                <span className="grid-info-name">Degree:</span> Bsc (Hons)
                Software Engineering
              </p>
            </div>
            <div className="phone">
              <p>
                <span className="grid-icon">&gt; </span>
                <span className="grid-info-name">Phone:</span> 58108134/55086689
              </p>
            </div>
            <div className="email">
              <p>
                <span className="grid-icon">&gt; </span>
                <span className="grid-info-name">Email:</span>{' '}
                sookundharmesh2906@gmail.com
              </p>
            </div>
            <div className="city">
              <p>
                <span className="grid-icon">&gt; </span>
                <span className="grid-info-name">City:</span> Riviere du Poste,
                Mauritius
              </p>
            </div>
          </div>
          <p className="text-justify">
            I am currently employed at Ceridian Mauritius as a Software
            Developer. I am working on their HCM software, implementing new
            features using C# and .Net. I did my degree at the University of
            Mauritus. I studied C++ and Java as well as some web techologies
            such as HTML, CSS and JS. I also learnt Python for my dissertation.
            I am very obsessed about technological stuff and I am also
            passionate on solving algorithmic problems. I can devote most of my
            time engaging in building innovative solutions to solve common
            problems using concepts like Machine Learning, Deep Learning and
            Artificial Intelligence. Now I am diving into learning some hardware
            programming using arduino and raspberry PI.
          </p>
        </div>
      </div>
      <div className="header">
        <h2>Skills</h2>
        <div className="green-border"></div>
      </div>
      <div className="skills-grid">
        <Skill name="C++" percent="70"></Skill>
        <Skill name="C#" percent="80"></Skill>
        <Skill name="Java" percent="80"></Skill>
        <Skill name="Python" percent="60"></Skill>
        <Skill name="HTML" percent="95"></Skill>
        <Skill name="CSS" percent="80"></Skill>
        <Skill name="Javascript" percent="90"></Skill>
        <Skill name="PHP" percent="40"></Skill>
        <Skill name="SQL" percent="85"></Skill>
        <Skill name="React" percent="70"></Skill>
        <Skill name="Vue" percent="70"></Skill>
        <Skill name="Angular" percent="40"></Skill>
      </div>
      <div className="header">
        <h2>Interests</h2>
        <div className="green-border"></div>
      </div>
      <div className="interest-grid">
        <Interest
          name="Artificial Intelligence"
          iconType="fas"
          iconName="brain"
          iconColor="#FF7F3F"
        ></Interest>
        <Interest
          name="Blockchain"
          iconType="fab"
          iconName="bitcoin"
          iconColor="#FBDF07"
        ></Interest>
        <Interest
          name="IoT"
          iconType="fas"
          iconName="cloud-arrow-up"
          iconColor="#ECE8DD"
        ></Interest>
        <Interest
          name="Computer Vision"
          iconType="fas"
          iconName="binoculars"
          iconColor="#C9CCD5"
        ></Interest>
        <Interest
          name="Networking"
          iconType="fas"
          iconName="network-wired"
          iconColor="#A66CFF"
        ></Interest>
        <Interest
          name="Augmented Reality"
          iconType="fab"
          iconName="unity"
          iconColor="#E8F9FD"
        ></Interest>
        <Interest
          name="Virtual Reality"
          iconType="fas"
          iconName="vr-cardboard"
          iconColor="#FFFDE3"
        ></Interest>
        <Interest
          name="Quantum Computing"
          iconType="fas"
          iconName="atom"
          iconColor="rgb(95, 217, 251)"
        ></Interest>
      </div>
    </div>
  );
}

export default About;
