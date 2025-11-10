import React from 'react'
import style from"./MindCH5.module.css"
import ch5image from "../../assets/chapter5.png"





export default function MindCH5() {
  return <>
    
    <div className=' lg:px-12 xl:px-20 pb-10'>
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Chapter 5: Design Thinking Process</h3>
      <div className="shadow-xl pb-4 grid md:grid-cols-2 p-2 gap-6">
        <div>
          <ul className="list-disc pl-5 pt-6 space-y-2 text-gray-700 h-center">
            <li>Empathize with users</li>
            <li>Define the problem</li>
            <li>Ideate solutions</li>
            <li>Create prototypes</li>
            <li>Test and iterate</li>
            <li>Core values of design thinking</li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center">
          <img 
            src={ch5image} 
            alt="Chapter 5: Design Thinking Process" 
            className="rounded w-auto h-[550px] object-fill"
          />
        </div>
      </div>
    </div>    
    </>
  
}
