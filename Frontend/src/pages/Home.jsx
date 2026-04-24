import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Welcome to AI LEAD
      </h1>
      <p className="mt-4 text-slate-400 max-w-lg">
        Empowering your business with AI-driven conversion strategies and high-performance web solutions.
      </p>
    </div>
  );
};

export default Home;