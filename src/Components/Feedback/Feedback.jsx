import React from 'react'
import style from"./Feedback.module.css"






export default function Feedback() {
  return <>
    
    
            <h1 className="text-2xl font-bold italic text-blue-800 mb-6">Feedback</h1>
            
            <div className="grid md:grid-cols-2 gap-6 pb-12">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p className="text-gray-700 mb-4 italic">
                        "Bloom's Taxonomy provides a clear framework for understanding different levels of cognitive skills, 
                        from basic recall to advanced evaluation and creation."
                    </p>
                    <p className="text-blue-700">- Student Feedback on Chapter 1</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p className="text-gray-700 mb-6 italic">
                        "The problem-solving steps are practical and can be applied to both academic and real-world challenges. 
                        The emphasis on brainstorming without judgment is particularly valuable."
                    </p>
                    <p className="text-blue-700">- Student Feedback on Chapter 2</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p className="text-gray-700 mb-4 italic">
                        "Understanding the difference between independent and dependent variables has clarified how to structure 
                        research questions and hypotheses more effectively."
                    </p>
                    <p className="text-blue-700">- Student Feedback on Chapter 3</p>
                </div>
                <div className="bg-blue-50 p-6  rounded-xl border-l-4 border-blue-500">
                    <p className="text-gray-700 mb-4 italic">
                        "Maslow's Hierarchy of Needs provides a valuable lens for understanding human motivation, 
                        both in academic studies and in practical team management situations."
                    </p>
                    <p className="text-blue-700">- Student Feedback on Chapter 4</p>
                </div>
            </div>

    </>
  
}
