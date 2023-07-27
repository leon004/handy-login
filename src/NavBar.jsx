import React from 'react';

const NavBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md p-2 flex justify-around items-center">
      <div className="flex flex-col items-center">
        {/* Aquí va el ícono para Home */}
        <span className="text-xs font-semibold text-gray-600">Home</span>
      </div>
      <div className="flex flex-col items-center">
        {/* Aquí va el ícono para Favourite */}
        <span className="text-xs font-semibold text-gray-600">Favourite</span>
      </div>
      <div className="flex flex-col items-center">
        {/* Aquí va el ícono para History */}
        <span className="text-xs font-semibold text-gray-600">History</span>
      </div>
      <div className="flex flex-col items-center">
        {/* Aquí va el ícono para Profile */}
        <span className="text-xs font-semibold text-gray-600">Profile</span>
      </div>
    </div>
  );
};

export default NavBar;
