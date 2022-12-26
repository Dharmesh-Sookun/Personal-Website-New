import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  return (
    <div className="navigation">
      <h3>
        <Link className="logo" to="/">
          D K Sookun
        </Link>
      </h3>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link
            className={
              location.pathname == '/' ? 'active-nav-links' : 'nav-links'
            }
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname == '/about' ? 'active-nav-links' : 'nav-links'
            }
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname == '/resume' ? 'active-nav-links' : 'nav-links'
            }
            to="/resume"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname == '/contact' ? 'active-nav-links' : 'nav-links'
            }
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
