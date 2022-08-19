import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <h3>
        <Link className="logo" to="/">
          Dharmesh Kumar Sookun
        </Link>
      </h3>
      <ul>
        <li>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
