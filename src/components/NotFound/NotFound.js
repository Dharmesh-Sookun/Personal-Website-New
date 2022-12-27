import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return (
    <div className="notFound">
      <h1>Page not Found</h1>
      <p>
        The page you're looking for can't be found. Double-check the url and try
        again.
        <br />
        You might be able to find what you're looking for by visiting our{' '}
        <Link className="notFound-link" to="/">
          home page
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFound;
