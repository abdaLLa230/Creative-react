import React from 'react'
import style from"./Chapter3.module.css"






export default function Chapter3() {
  return <>
    
<div className=' lg:px-12 xl:px-20 pb-10 space-y-6'>
                    <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-sky-700 italic mb-6">Chapter 3: Theory & Variables</h3>

                            <h4 className="text-lg font-medium text-blue-600 italic mb-2">What is a Theory?</h4>
                            <p>A model or framework for observation and understanding phenomena that:</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <p className="text-md text-blue-600">Generalized statements about relationships</p>
                                <p className="text-md text-blue-600">Explains and predicts the relationship between variables</p>
                                <p className="text-md text-blue-600">Allows the researcher to make links between</p>
                                <div className=" p-3 ">
                                    <p className="text-md text-gray-600"></p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <p className="text-md text-gray-600">Abstract and concrete concepts</p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <p className="text-md text-gray-600">Theoretical and empirical knowledge</p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100"> 
                                    <p className="text-md text-gray-600">Thought and observational statements</p>
                                </div> 

                            </div>
                        </div>
                         
                        <div>
                            <h4 className="text-lg font-medium text-blue-600 mb-2">Characteristics of theory</h4>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                            
                                <div className="bg-green-50 p-3 rounded-lg border border-blue-100">
                                    <p className="text-md text-gray-600">Theory guides research and organizes its ideas.</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-blue-100">
                                    <p className="text-md text-gray-600">Empirically relevant.</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-blue-100"> 
                                    <p className="text-md text-gray-600">Always tentative, never proven.</p>
                                </div> 
                                <div className="bg-green-50 p-3 rounded-lg border border-blue-100"> 
                                    <p className="text-md text-gray-600">Becomes stronger as more supporting evidence is gathered</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-blue-100"> 
                                    <p className="text-md text-gray-600">Has the capacity to generate new research.</p>
                                </div>
                                
                            </div>
                        </div>
                        <h4 className="text-lg font-medium text-blue-600 ">What is a Variable?</h4>
                            <p>• A variable , as opposed to a constant, is simply anything.,<br/>
• any construct that can take on different values.</p>
                        <div>
                            <h4 className="text-lg font-medium text-blue-600 mb-2">Types of Variables</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 className="font-medium text-purple-700 mb-1">Independent Variable</h5>
                                    <p className="text-sm text-gray-600">Influences the dependent variable</p>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 className="font-medium text-purple-700 mb-1">Dependent Variable</h5>
                                    <p className="text-sm text-gray-600">Outcome affected by the independent variable</p>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 className="font-medium text-purple-700 mb-1">Moderating Variable</h5>
                                    <p className="text-sm text-gray-600">Affects the strength of the relationship</p>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 className="font-medium text-purple-700 mb-1">Mediating Variable</h5>
                                    <p className="text-sm text-gray-600">Explains the relationship between two variables</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-blue-600 mb-2">Levels of Theory</h4>
                            <div className="grid md:grid-cols-3 gap-3">
                                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 className="font-medium text-green-700 mb-1">Micro-Level</h5>
                                    <p className="text-sm text-gray-600">Explains individual behavior (e.g., Maslow's Motivation Theory)</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 className="font-medium text-green-700 mb-1">Meso-Level</h5>
                                    <p className="text-sm text-gray-600">Explains group interactions (e.g., Organizational Communication)</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 className="font-medium text-green-700 mb-1">Macro-Level</h5>
                                    <p className="text-sm text-gray-600">Explains large-scale behaviors (e.g., National Cultures like Hofstede)</p>
                                </div>
                            </div>
                        </div>
                    </div>
  </div>          
    </>
  
}
