import React from 'react';

const RandomButton = ({ onClick }) => {
  const changeBackground = () => {
    const backgrounds = [
      'fondo1.jpg',
      'fondo2.jpg',
      'fondo3.jpg',
      'fondo4.jpg',
      'fondo5.png',
      'fondo6.png',
      'fondo7.png',
      'fondo8.png',
    ];

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const imageUrl = backgrounds[randomIndex];
    document.body.style.backgroundImage = `url(${imageUrl})`;
  };

  return (
    <button className="random-button" onClick={() => { onClick(); changeBackground(); }}>
      Obtener Nueva Frase y Cambiar Fondo
    </button>
  );
};

export default RandomButton;
