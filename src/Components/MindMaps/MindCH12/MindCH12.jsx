import React from 'react'
import style from"./MindCH12.module.css"
import ch12image from "../../../assets/chapter12.png"





export default function MindCH12() {
  return <>
    
    <div className=' lg:px-12 xl:px-20 pb-10'>
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Chapters 1+2: Foundations of Creative Thinking</h3>
      <div className=" shadow-xl pb-4 grid md:grid-cols-2 p-2 gap-6">
        <div>
          <ul className="list-disc pl-5 pt-6 space-y-2 text-gray-700 h-center">
            <li>Bloom's Taxonomy cognitive skills hierarchy</li>
            <li>Four types of knowledge</li>
            <li>Affective Domain for emotional learning</li>
            <li>Critical thinking process</li>
            <li>Problem-solving steps</li>
            <li>Key elements of innovation</li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg  flex items-center justify-center">
          <img 
            src={ch12image} 
            alt="Chapters 1+2: Foundations of Creative Thinking" 
            className="rounded w-auto h-[500px] object-fill"
          />
        </div>
      </div>
    </div>    
    </>
  
}
