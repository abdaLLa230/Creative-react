
import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!MobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-500 font-semibold' : 'text-black/80';
  };

  return (
    <>
      <nav className="bg-white/10  backdrop-blur-md border-b border-white/20 shadow-lg sticky top-0 z-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link 
              to="/" 
              className="text-lg sm:text-xl italic font-bold hover:text-sky-600  transition whitespace-nowrap lg:ps-8 xl:ps-24"
              onClick={closeMobileMenu}
            >
              Creative Thinking Hub
            </Link>
            
            {/* Full Screen */}
            <div className="hidden md:flex space-x-3 xl:pe-24">
              <Link 
                to="/" 
                className={` transition px-3 py-2 text-sm lg:text-base rounded-lg backdrop-blur-sm ${isActive('/')} ${location.pathname === '/' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              >
                Home
              </Link>
              <Link 
                to="/mindmap" 
                className={` transition px-3 py-2 text-sm lg:text-base rounded-lg backdrop-blur-sm ${isActive('/mindmap')} ${location.pathname === '/mindmap' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              >
                Mind Map
              </Link>
              <Link 
                to="/Chapter" 
                className={` transition px-3 py-2 text-sm lg:text-base rounded-lg backdrop-blur-sm ${isActive('/Chapter')} ${location.pathname === '/Chapter' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              >
                Chapters
              </Link>
              <Link 
                to="/Creative" 
                className={` transition px-3 py-2 text-sm lg:text-base rounded-lg backdrop-blur-sm ${isActive('/Creative')} ${location.pathname === '/Creative' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              >
                Creative Thinking
              </Link>
              <Link 
                to="/Feed" 
                className={` transition px-3 py-2 text-sm lg:text-base rounded-lg backdrop-blur-sm ${isActive('/Feed')} ${location.pathname === '/Feed' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              >
                Feedback
              </Link>
            </div>

            <button 
              className="md:hidden  flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile View */}
        <div 
          className={`${MobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 w-full`}
        >
          <div className="w-full px-4 sm:px-6 py-2 flex flex-col space-y-2">
            <Link 
              to="/" 
              className={`py-3 px-4 text-left  transition rounded-lg backdrop-blur-sm text-sm sm:text-base ${isActive('/')} ${location.pathname === '/' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/mindmap" 
              className={`py-3 px-4 text-left  transition rounded-lg backdrop-blur-sm text-sm sm:text-base ${isActive('/mindmap')} ${location.pathname === '/mindmap' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              onClick={closeMobileMenu}
            >
              Mind Map
            </Link>
            <Link 
              to="/chapter" 
              className={`py-3 px-4 text-left  transition rounded-lg backdrop-blur-sm text-sm sm:text-base ${isActive('/Chapter')} ${location.pathname === '/Chapter' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              onClick={closeMobileMenu}
            >
              Chapters
            </Link>
            <Link 
              to="/creative" 
              className={`py-3 px-4 text-left  transition rounded-lg backdrop-blur-sm text-sm sm:text-base ${isActive('/Creative')} ${location.pathname === '/creative' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              onClick={closeMobileMenu}
            >
              Creative Thinking
            </Link>
            <Link 
              to="/feed" 
              className={`py-3 px-4 text-left  transition rounded-lg backdrop-blur-sm text-sm sm:text-base ${isActive('/Feed')} ${location.pathname === '/Feed' ? 'bg-white/20' : 'hover:bg-white/10'}`}
              onClick={closeMobileMenu}
            >
              Feedback
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}