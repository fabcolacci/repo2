// Subir.jsx
import React from 'react';
import './Subir.css';

const SubirTopButton = () => {
  // Función para hacer scroll hacia arriba
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="subir-top" onClick={handleScroll}>
      Subir
    </button>
  );
};

export default SubirTopButton;







