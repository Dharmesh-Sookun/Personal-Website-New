import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Interest.css';

function Interest({ name, iconType, iconName, iconColor }) {
  return (
    <div className="interest">
      <span style={{ color: iconColor }}>
        <FontAwesomeIcon icon={[iconType, iconName]} />
      </span>
      <p>{name}</p>
    </div>
  );
}

export default Interest;
