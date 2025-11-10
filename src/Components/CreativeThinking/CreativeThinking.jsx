import React, { useState, useEffect } from 'react';
import style from"./CreativeThinking.module.css"






export default function CreativeThinking() {
  
    

  const [currentQuotes, setCurrentQuotes] = useState([]);

  const quotes = [
    "Creativity is just connecting things. - Steve Jobs",
    "The creative adult is the child who survived. - Ursula K. Le Guin",
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "Creativity involves breaking out of established patterns to look at things differently. - Edward de Bono",
    "Creativity is intelligence having fun. - Albert Einstein",
    "The worst enemy to creativity is self-doubt. - Sylvia Plath",
    "Creativity takes courage. - Henri Matisse",
    "To be creative means to be in love with life. - Osho",
    "Curiosity about life is the secret of great creative people. - Leo Burnett",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso"
  ];

  const showNewQuotes = () => {
    const shuffled = [...quotes].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setCurrentQuotes(selected);
  };

  useEffect(() => {
    showNewQuotes();
  }, []);  





  return <>  
    <div className=' lg:px-12 xl:px-20 pb-10'>
      <h2 className="text-2xl font-bold italic text-sky-800 mb-2">Developing Creative Thinking</h2>

      <h2 className="text-2xl font-bold italic text-blue-600 mb-5">To be good character : </h2>
      <div className="bg-gray-100 lg:mb-6 rounded-lg flex items-center justify-center">
        <img 
          src="https://github.com/abdaLLa230/Creative-react/blob/main/src/assets/creative%20thinking.jpeg"
          alt="Creative Thinking" 
          className="rounded-2xl w-auto h-[550px] object-contain"
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Steps */}
        <div className="bg-white p-6 rounded-xl shadow-md md:w-2/3">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Steps to Become a Creative Thinker</h3>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium text-blue-700">Challenge Assumptions</h4>
              <p className="text-gray-700 mt-2">Question the status quo and conventional wisdom. Don't take things at face value.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium text-blue-700">Embrace Curiosity</h4>
              <p className="text-gray-700 mt-2">Cultivate a habit of asking 'what if' and 'why not'. Explore new subjects and ideas.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium text-blue-700">Develop Observation Skills</h4>
              <p className="text-gray-700 mt-2">Notice details others might overlook. Practice active listening and keen observation.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium text-blue-700">Make Connections</h4>
              <p className="text-gray-700 mt-2">Combine ideas from different fields or disciplines. Look for patterns and relationships.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium text-blue-700">Practice Divergent Thinking</h4>
              <p className="text-gray-700 mt-2">Generate multiple solutions to problems. Quantity leads to quality in creative thinking.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium text-blue-700">Embrace Failure</h4>
              <p className="text-gray-700 mt-2">View mistakes as learning opportunities. Failure is often a step toward innovation.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium text-blue-700">Create Idea Banks</h4>
              <p className="text-gray-700 mt-2">Keep records of thoughts and inspirations. Maintain journals or digital notes.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium text-blue-700">Engage in Play</h4>
              <p className="text-gray-700 mt-2">Allow time for unstructured creative activities. Play stimulates imagination.</p>
            </div>
          </div>
        </div>
        
        {/* Quotes */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 md:w-1/3 h-full">
          <h3 className="text-xl font-semibold text-blue-700 mb-6">Creative Inspiration</h3>
          <div className="space-y-6">
            {currentQuotes.map((quote, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700 italic">"{quote}"</p>
              </div>
            ))}
          </div>
          <button 
            onClick={showNewQuotes}
            className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Show New Quotes
          </button>
        </div>
      </div>
    </div>
    </>
  
}
