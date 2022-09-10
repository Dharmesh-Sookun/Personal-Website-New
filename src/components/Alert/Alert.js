import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Alert.css';

function Alert({ type, message }) {
  const [show, setShow] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  if (show) {
    return (
      <div
        className={`alert ${
          type == 'success' ? 'success' : type == 'error' ? 'error' : ''
        }`}
      >
        <span className="close-btn" onClick={handleClose}>
          &times;
        </span>
        <span className="alert-icon">
          {type == 'success' ? (
            <FontAwesomeIcon icon="fa-solid fa-check" />
          ) : type == 'error' ? (
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          ) : (
            ''
          )}
        </span>
        <span>{message}</span>
      </div>
    );
  } else {
    return null;
  }
}

export default Alert;
