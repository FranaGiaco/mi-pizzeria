import React from 'react';
import fondoHeader from '../assets/fondo-header.jpg'; // Ajusta el nombre si es diferente

const Header = () => {
  return (
    <header
      className="p-5 text-white text-center"
      style={{
        backgroundImage: `url(${fondoHeader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Bienvenidos a Pizzería Mamma Mia!</h1>
      <p>La mejor pizza artesanal que encontrarás en Chile 🍕</p>
    </header>
  );
};

export default Header;
