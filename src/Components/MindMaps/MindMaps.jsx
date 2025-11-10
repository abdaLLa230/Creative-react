import React, { useState } from 'react'
import style from"./MindMaps.module.css"
import MindCH12 from './MindCH12/MindCH12';
import MindCH34 from './MindCH34/MindCH34';
import MindCH5 from './MindCH5/MindCH5';





export default function MindMaps() {
    const [active, setActive] = useState("mindch12");

  return <>
    <div className=' lg:px-12 xl:px-20 '>

                <h1 className="text-2xl font-bold italic text-blue-800 mb-6">MindMaps</h1>
               <div className=" overflow-x-auto">
                <div className="flex space-x-2 mb-6">
                    <button onClick={() => setActive("mindch12")} className={`mindmap-tab px-4 py-2 text-white rounded-2xl text-sm ${active === "mindch12" ? "bg-blue-600" : "bg-gray-500"}`}>Chapter One & Two</button>
                    <button onClick={() => setActive("mindch34")} className={`mindmap-tab px-4 py-2 text-white rounded-2xl text-sm ${active === "mindch34" ? "bg-blue-600" : "bg-gray-500"}`}>Chapter Three & Four</button>
                    <button onClick={() => setActive("mindch5")}  className={`mindmap-tab px-4 py-2 text-white rounded-2xl text-sm ${active === "mindch5"  ? "bg-blue-600" : "bg-gray-500"}`}>Chapter Five</button>
                </div>
            </div>   
</div>

      {active === "mindch12" && <MindCH12 />}
      {active === "mindch34" && <MindCH34 />}
      {active === "mindch5" && <MindCH5 />} 
    
    </>
  
}
