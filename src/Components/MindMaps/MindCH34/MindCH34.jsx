import React from 'react'
import style from"./MindCH34.module.css"
import ch34image from "../../../assets/chapter34.png"





export default function MindCH34() {
  return <>
    



    <div className=' lg:px-12 xl:px-20 pb-10'>
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Chapters 3+4: Theories and Variables</h3>
      <div className="grid shadow-xl pb-4 p-2 md:grid-cols-2 gap-6">
        <div>
          <ul className="list-disc pl-5 pt-6 space-y-2 text-gray-700 h-center">
            <li>Definition and purpose of theory</li>
            <li>Types of variables</li>
            <li>Levels of theory</li>
            <li>Theoretical framework development</li>
            <li>Maslow's Hierarchy of Needs</li>
            <li>Brainstorming techniques</li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center">
          <img 
            src={ch34image} 
            alt="Chapters 3+4: Theories and Variables" 
            className="rounded w-auto h-[550px] object-fill"
          />
        </div>
      </div>
    </div>    
    </>
  
}
