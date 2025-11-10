import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
       <footer className="relative bg-gray-200 py-4 overflow-hidden">
        <div className="absolute inset-0 bg-gray-300/40 backdrop-blur-xl"></div>
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-300 shadow-lg">
                <div className="text-2xl font-bold  italic mb-6 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Creative Thinking Hub</div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Creative thinking is the ability to look at problems and situations from a fresh perspective that suggests unorthodox solutions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="w-12 h-12 rounded-xl bg-blue-600/20 hover:bg-blue-500/40 border border-blue-400/30 flex items-center justify-center text-gray-700 transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-110 hover:-translate-y-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-pink-600/20 hover:bg-pink-500/40 border border-pink-400/30 flex items-center justify-center text-gray-700 transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-110 hover:-translate-y-1">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-gray-800/20 hover:bg-gray-700/40 border border-gray-400/30 flex items-center justify-center text-gray-700 transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-110 hover:-translate-y-1">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-blue-400/20 hover:bg-blue-300/40 border border-blue-300/30 flex items-center justify-center text-gray-700 transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-110 hover:-translate-y-1">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-blue-700/20 hover:bg-blue-600/40 border border-blue-500/30 flex items-center justify-center text-gray-700 transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-110 hover:-translate-y-1">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-300 shadow-lg h-full">
                <h3 className="text-xl font-bold mb-6 text-gray-800 relative">
                  <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                    Quick Links
                  </span>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full mt-2"></div>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <Link to="/mindmap" className="text-gray-700 hover:text-blue-600 transition-all duration-300 group-hover:font-medium hover:translate-x-1">
                      Mind Map
                    </Link>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                   <Link to="/Chapter" className="text-gray-700 hover:text-blue-600 transition-all duration-300 group-hover:font-medium hover:translate-x-1">
                      Chapters
                    </Link>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <Link to="/Creative" className="text-gray-700 hover:text-blue-600 transition-all duration-300 group-hover:font-medium hover:translate-x-1">
                      Creative Thinking
                    </Link>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <Link to="/feed" className="text-gray-700 hover:text-blue-600 transition-all duration-300 group-hover:font-medium hover:translate-x-1">
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl px-8 border border-gray-300 shadow-lg h-full">
                <h3 className="text-xl font-bold my-6 text-gray-800 relative">
                  <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                    Contact Us
                  </span>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full mt-2"></div>
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start text-gray-700 group">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-map-marker-alt text-blue-600"></i>
                    </div>
                    <span className="group-hover:text-blue-600 transition-colors duration-300 ">
                      October 6 University<br />
                    </span>
                  </li>
                  <li className="flex items-center text-gray-700 group">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-phone text-green-600"></i>
                    </div>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                      +20 1033574732
                    </span>
                  </li>
                  <li className="flex items-center text-gray-700 group">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 p-3 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-envelope text-purple-400"></i>
                    </div>
                    <span className="group-hover:text-blue-600 transition-colors duration-300"> web-application@o6u.edu.eg</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>     
    </>
  )
}