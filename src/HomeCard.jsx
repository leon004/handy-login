import React from 'react';

const HomeCard = ({ name, profession, price }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4">
        {/* Aquí va el ícono circular para la foto de perfil */}
      </div>
      <div className="text-xl font-semibold text-gray-800">{name}</div>
      <div className="text-lg text-gray-600">{profession}</div>
      <div className="text-lg text-blue-600">{price}</div>
      {/* Aquí va el corazón, puedes usar un botón con un ícono */}
    </div>
  );
};

export default HomeCard;
