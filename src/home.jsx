import React from 'react';
import HomeMenu from './HomeMenu';
import HomeCard from './HomeCard';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <HomeMenu />
      <div className="my-4">
        <h2 className="text-3xl text-blue-700">Handy Home</h2>
        <div className="relative mt-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M14.293 12.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 111.414-1.414l3 3zM16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            type="text"
            className="pl-10 w-full border rounded-lg py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search services you need"
          />
        </div>
        <div className="flex justify-between mt-6">
          <span className="text-lg font-semibold text-gray-800">Categories</span>
          <span className="text-lg font-semibold text-blue-700">See All</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Aquí agregar las cards con los datos de los profesionales */}
          <HomeCard name="José Hernandez" profession="Gardener" price="$99" />
          <HomeCard name="Carlos Gaytan" profession="Chef" price="$120" />
          {/* Agregar más cards aquí */}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
