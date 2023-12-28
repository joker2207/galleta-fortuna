import React from 'react';

const FortuneDisplay = ({ phrase, author }) => {
  return (
    <div className="fortune-display">
      <p>"{phrase}"</p>
      <p>- {author}</p>
    </div>
  );
};

export default FortuneDisplay;
