import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';


function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 shadow w-full">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Your Name</h1>
          <nav className="mt-4 sm:mt-0 space-x-6">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 py-12 flex-1">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-lg text-gray-700">
            I’m a passionate developer skilled in React, Tailwind CSS, and more.<br />
            Explore my work and experience below!
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-bold mb-2">Project 1</h4>
              <p className="text-gray-600">Short description of your project.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-bold mb-2">Project 2</h4>
              <p className="text-gray-600">Short description of your project.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-bold mb-2">Project 3</h4>
              <p className="text-gray-600">Short description of your project.</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Job Title</span> at Company (Year-Year)
              <p className="text-gray-600">Brief description of your role and achievements.</p>
            </li>
            <li>
              <span className="font-bold">Job Title</span> at Company (Year-Year)
              <p className="text-gray-600">Brief description of your role and achievements.</p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">React</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">HTML</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">CSS</span>
            {/* Add more skills as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:your@email.com" className="text-blue-700 underline">your@email.com</a></p>
          <p className="text-gray-700">LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-700 underline">yourprofile</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 text-center w-full">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;