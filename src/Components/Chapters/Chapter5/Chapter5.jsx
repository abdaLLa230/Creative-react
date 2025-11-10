import React from 'react'
import style from"./Chapter5.module.css"






export default function Chapter5() {
  
  return <>
    
<div className=' lg:px-12 xl:px-20 pb-10 space-y-6'>
<h3 className="text-xl font-semibold text-sky-700 italic "> Chapter 5: Design Thinking Process</h3>

                        
    <div class="max-w-4xl w-full justify-center">
        <h1 class="text-3xl font-bold text-center italic text-blue-800 mb-8">5 Stages of Design Thinking</h1>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">👂</div>
                <h2 class="text-xl font-semibold text-blue-600">Empathize</h2>
                <p class="text-gray-600 mt-2">Understand user needs</p>
            </div>
            
            <div class="arrow hidden md:block">→</div>
            
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">✍️</div>
                <h2 class="text-xl font-semibold text-blue-600">Define</h2>
                <p class="text-gray-600 mt-2">Frame the problem</p>
            </div>
            
            <div class="arrow hidden md:block">→</div>
            
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">💡</div>
                <h2 class="text-xl font-semibold text-blue-600">Ideate</h2>
                <p class="text-gray-600 mt-2">Generate ideas</p>
            </div>
            
            <div class="arrow hidden md:block">→</div>
            
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">🛠️</div>
                <h2 class="text-xl font-semibold text-blue-600">Prototype</h2>
                <p class="text-gray-600 mt-2">Create solutions</p>
            </div>
            
            <div class="arrow hidden md:block">→</div>
            
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">🧪</div>
                <h2 class="text-xl font-semibold text-blue-600">Test</h2>
                <p class="text-gray-600 mt-2">Evaluate solutions</p>
            </div>
        </div>
        
        <div class="flex md:hidden justify-center mt-4 space-x-2">
            <div class="arrow">↓</div>
            <div class="arrow">↓</div>
            <div class="arrow">↓</div>
            <div class="arrow">↓</div>
        </div>
    </div>
                        <div>
                            <p>Design Thinking is a human-centered, creative problem-solving approach that involves understanding users, redefining problems, and creating innovative solutions.</p>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead class="bg-blue-50">
                                    <tr>
                                        <th class="py-2 px-4 border-b text-left">Stage</th>
                                        <th class="py-2 px-4 border-b text-left">Goal</th>
                                        <th class="py-2 px-4 border-b text-left">Tools/Methods</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-medium">Empathize</td>
                                        <td class="py-2 px-4 border-b">Understand users’ real needs, feelings, and challenges without assumptions</td>
                                        <td class="py-2 px-4 border-b">Observation, user interviews, immersing in users' environment</td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="py-2 px-4 border-b font-medium">Define</td>
                                        <td class="py-2 px-4 border-b">Clearly state the core problem based on user insights</td>
                                        <td class="py-2 px-4 border-b">Data synthesis, creating human-centered problem statements</td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-medium">Ideate</td>
                                        <td class="py-2 px-4 border-b">Explore a wide variety of creative solutions and push beyond obvious ideas.</td>
                                        <td class="py-2 px-4 border-b"> Brainstorming, mind mapping, SCAMPER, group discussions</td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="py-2 px-4 border-b font-medium">Prototype</td>
                                        <td class="py-2 px-4 border-b">Build quick, low-fidelity models to test assumptions and visualize solutions.</td>
                                        <td class="py-2 px-4 border-b">Sketching, paper models, mock-ups, digital demos</td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-medium">Test</td>
                                        <td class="py-2 px-4 border-b">Get user feedback on prototypes to refine solutions and uncover hidden problems.</td>
                                        <td class="py-2 px-4 border-b">User testing, feedback collection, usability observation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h2 class="text-lg font-medium text-blue-600 mb-2">Design Thinking</h2>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"> EMPATHISE </span>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"> IMPLEMENT</span>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PROTOTYPE</span>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TEST</span>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">IDEATE</span>
                                 <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">DEFINE</span>
                            </div>
                        </div>
                    </div>

    </>
  
}
