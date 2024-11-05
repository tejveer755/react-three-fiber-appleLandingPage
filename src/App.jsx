import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white bg-opacity-70 backdrop-blur-md z-10 transition duration-300">
        <div className="text-2xl font-semibold">Apple</div>
        <ul className="flex space-x-6">
          {['Mac', 'iPad', 'iPhone', 'Watch', 'Support'].map((item) => (
            <li key={item} className="hover:text-gray-600 cursor-pointer transition duration-200">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex relative flex-col items-center justify-center min-h-screen pt-20 px-4 text-center space-y-6">
        <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 text-center transition duration-300">
          {/* Gradient Heading */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-fuchsia-700 to-rose-500 bg-clip-text text-transparent animate-fade-in">
            MacBook Pro
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mt-4">
            Power meets precision. Experience the ultimate performance with the all-new MacBook Pro.
          </p>

          {/* Buttons */}
          <div className="flex items-center w-full justify-center space-x-4 mt-8">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-200">
              Learn More
            </button>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition duration-200">
              Buy Now
            </button>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="absolute inset-0 top-[10%] h-[600px] md:h-[800px] w-full transition duration-500">
          <Canvas camera={{ fov: 20, position: [0, -10, 120] }}>
            <Environment
              files={[
                'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/brown_photostudio_02_4k.hdr',
              ]}
            />
            <ScrollControls>
              <MacContainer />
            </ScrollControls>
          </Canvas>
        </div>
      </header>
    </div>
  );
}

export default App;
