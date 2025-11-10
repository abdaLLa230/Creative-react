import style from"./Chapters.module.css"
import Chapter1 from './Chapter1/Chapter1'
import Chapter2 from './Chapter2/Chapter2'
import Chapter3 from './Chapter3/Chapter3'
import Chapter4 from './Chapter4/Chapter4'
import Chapter5 from './Chapter5/Chapter5'
import { useState } from 'react'

export default function Chapters() {

 const [active, setActive] = useState("ch1");

  return <>
    <div className=' lg:px-12 xl:px-20 '>

                <h1 className="text-2xl font-bold italic text-blue-800 mb-6">Chapters Summary</h1>
                <div className=" overflow-x-auto">
                <div className="hidden md:flex space-x-2 mb-6">
                    <button onClick={() => setActive("ch1")} className={`mindmap-tab px-4 py-2 text-white rounded-2xl ${active === "ch1" ? "bg-blue-600" : "bg-gray-500"}`}>Chapter 1</button>
                    <button onClick={() => setActive("ch2")} className={`mindmap-tab px-4 py-2 text-white rounded-2xl ${active === "ch2" ? "bg-blue-600" : "bg-gray-500"}`}>Chapter 2</button>
                    <button onClick={() => setActive("ch3")} className={`mindmap-tab px-4 py-2 text-white rounded-2xl ${active === "ch3" ? "bg-blue-600" : "bg-gray-500"}`}>Chapter 3</button>
                    <button onClick={() => setActive("ch4")} className={`mindmap-tab px-4 py-2 text-white rounded-2xl ${active === "ch4" ? "bg-blue-600" : "bg-gray-500"}`}>Chapter 4</button>
                    <button onClick={() => setActive("ch5")} className={`mindmap-tab px-4 py-2 text-white rounded-2xl ${active === "ch5" ? "bg-blue-600" : "bg-gray-500"}`}>Chapter 5</button>
                </div>

                <div className="flex md:hidden space-x-2 mb-6">
                    <button onClick={() => setActive("ch1")} className={`mindmap-tab px-3 md:px-4 py-2 text-white rounded-2xl ${active === "ch1" ? "bg-blue-600" : "bg-gray-500"}`}>Ch 1</button>
                    <button onClick={() => setActive("ch2")} className={`mindmap-tab px-3 md:px-4 py-2 text-white rounded-2xl ${active === "ch2" ? "bg-blue-600" : "bg-gray-500"}`}>Ch 2</button>
                    <button onClick={() => setActive("ch3")} className={`mindmap-tab px-3 md:px-4 py-2 text-white rounded-2xl ${active === "ch3" ? "bg-blue-600" : "bg-gray-500"}`}>Ch 3</button>
                    <button onClick={() => setActive("ch4")} className={`mindmap-tab px-3 md:px-4 py-2 text-white rounded-2xl ${active === "ch4" ? "bg-blue-600" : "bg-gray-500"}`}>Ch 4</button>
                    <button onClick={() => setActive("ch5")} className={`mindmap-tab px-3 md:px-4 py-2 text-white rounded-2xl ${active === "ch5" ? "bg-blue-600" : "bg-gray-500"}`}>Ch 5</button>
                </div>
            </div>   
</div>
<div  className=" px-2 rounded-xl shadow-md  ">
      {active === "ch1" && <Chapter1 />}
      {active === "ch2" && <Chapter2 />}
      {active === "ch3" && <Chapter3 />} 
      {active === "ch4" && <Chapter4 />}
      {active === "ch5" && <Chapter5 />}
            </div>
      
    </>
  
}
