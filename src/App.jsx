import React, { useState, useEffect } from 'react';
import FortuneDisplay from './FortuneDisplay';
import RandomButton from './RandomButton';
import './App.css'; 
import phrases from './utils/phrases.json';

const App = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Seleccionar un fondo aleatorio al cargar la página
    const backgrounds = [
      'fondo1.jpg',
      'fondo2.jpg',
      'fondo3.jpg',
      'fondo4.jpg',
      'fondo5.jpg',
      'fondo6.jpg',
      'fondo7.jpg',
      'fondo8.jpg',
    ];

    const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomBackgroundIndex];

    document.body.style.backgroundImage = `url(${selectedBackground})`;

    return () => {
      // Limpiar el fondo al desmontar el componente (opcional)
      document.body.style.backgroundImage = '';
    };
  }, []); // El segundo argumento del useEffect es un arreglo de dependencias vacío, por lo que solo se ejecutará una vez al montar el componente

  const changeFortune = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhraseIndex(randomIndex);
  };

  return (
    <div className="app-container">
      <h1>Frase del Día</h1>
      <FortuneDisplay
        phrase={phrases[phraseIndex].phrase}
        author={phrases[phraseIndex].author}
        backgroundImage={document.body.style.backgroundImage} // Pasar el fondo al componente FortuneDisplay
      />
      <RandomButton onClick={changeFortune} />
    </div>
  );
};

export default App;
