import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Home.css';
import User from '../../images/user-placeholder.png';

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
        <span>
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </span>
      </div>
    </div>
  );
}

export default Home;
