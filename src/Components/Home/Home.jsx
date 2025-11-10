import React from 'react'
import style from"./Home.module.css"






export default function Home() {
  return <>
    
 <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 italic">Creative Thinking</h1>
      </div>
      
      {/* About Creative Thinking */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">About Creative Thinking</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-4 text-justify">
              Creative thinking is the ability to look at problems and situations from a fresh perspective that suggests unorthodox solutions.
              It involves breaking away from traditional patterns of thinking and generating innovative ideas.
            </p>
            <p className="text-gray-700 text-justify">
              This course explores various thinking models, problem-solving techniques, and innovation 
              strategies to help you develop your creative potential.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg flex items-center justify-center">
            <img src="src\assets\creative thinking.jpeg"
                 alt="Creative Thinking" className="rounded-2xl w-full h-72 md:object-cover object-fill" />
          </div>
        </div>
      </div>
      
      {/* Key Benefits */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-10">
        <h2 className="text-2xl font-bold mb-4 italic text-blue-600">Key Benefits of Creative Thinking</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-semibold mb-2 text-blue-700">Problem Solving</h3>
            <p className="text-gray-700 text-sm">
              Find innovative solutions to complex challenges by thinking outside conventional frameworks.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="font-semibold mb-2 text-green-700">Adaptability</h3>
            <p className="text-gray-700 text-sm">
              Adjust to new situations and changing environments with flexible thinking approaches.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 className="font-semibold mb-2 text-purple-700">Innovation</h3>
            <p className="text-gray-700 text-sm">
              Develop new products, services, or approaches that create value and differentiation.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <h3 className="font-semibold mb-2 text-yellow-700">Decision Making</h3>
            <p className="text-gray-700 text-sm">
              Consider multiple perspectives and alternatives for more informed choices.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold mb-2 text-red-700">Learning</h3>
            <p className="text-gray-700 text-sm">
              Connect new information with existing knowledge in original and meaningful ways.
            </p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <h3 className="font-semibold mb-2 text-indigo-700">Collaboration</h3>
            <p className="text-gray-700 text-sm">
              Contribute unique ideas and build on others' thoughts in team environments.
            </p>
          </div>
        </div>
      </div>    
    </>
  
}
