import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Home.css';
import User from '../../images/home-img.jpg';

function Home() {
  return (
    <div className="home">
      <div className="photo-container">
        <img src={User} className="photo" />
      </div>
      <h1 className="name">Dharmesh Kumar Sookun</h1>
      <p className="info">
        I'm a passionate <span>Software Engineer</span> from Mauritius
      </p>
      <div className="icons">
        <a
          href="https://twitter.com/SookunDharmesh"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
        <a
          href="https://www.facebook.com/DharmeshSookun"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
        <a
          href="https://www.instagram.com/dharmeshsookun/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a
          href="https://www.linkedin.com/in/dharmesh-sookun-36ba58133/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </div>
    </div>
  );
}

export default Home;
