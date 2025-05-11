import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f2038] text-white fixed top-0 left-0 z-50 shadow-md w-full">
      <div className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Jasmine Xu</h1>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 text-base font-medium">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/projects" className="hover:text-pink-400 transition">Projects</Link>
          <Link to="/blog" className="hover:text-pink-400 transition">Blog</Link>
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-base font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-pink-400">Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-pink-400">Projects</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block hover:text-pink-400">Blog</Link>
        </div>
      )}
    </nav>
  );
}
