import React from 'react';

import './Skill.css';

function Skill({ name, percent }) {
  return (
    <div>
      <div className="skill">
        <p>{name}</p>
        <p>{percent}%</p>
      </div>
      <div className="bar-container">
        <div className="bar" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

export default Skill;
