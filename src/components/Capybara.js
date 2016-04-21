// src/components/Capybara.js
import React from 'react';

const Capybara = props => {
  const { image, onClick, text } = props;

  return (
    <div onClick={onClick} className="center">
      <img src={image} height="400" width="600" />
      <h1>{text}</h1>
    </div>
  );
};

export default Capybara;
