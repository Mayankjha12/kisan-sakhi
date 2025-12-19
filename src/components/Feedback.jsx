import React, { useState } from 'react';

const Feedback = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8 bg-white min-h-screen">
      <div className="text-center space-y-2">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold uppercase">Feedback [cite: 69]</span>
        <h2 className="text-3xl font-bold">Share Your Feedback [cite: 71]</h2>
        <p className="text-gray-400">Help us improve KrishiSakhi for farmers like you.</p>
      </div>

      <div className="bg-gray-50 rounded-3xl p-8 space-y-10 border border-gray-100 shadow-sm text-center">
        {/* Star Rating */}
        <div className="space-y-4">
          <p className="font-bold">Rate Your Experience</p>
          <div className="flex justify-center gap-4 text-3xl text-gray-200">
            {[1, 2, 3, 4, 5].map(s => (
              <i key={s} className={`fa-solid fa-star cursor-pointer ${s <= rating ? 'text-yellow-400' : ''}`} onClick={() => setRating(s)}></i>
            ))}
          </div>
        </div>

        {/* Voice Feedback [cite: 35] */}
        <div className="border-t pt-8 space-y-4">
          <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-200 inline-block w-full max-w-xs">
            <button className="bg-green-500 text-white w-14 h-14 rounded-full mb-3 shadow-lg"><i className="fa-solid fa-microphone"></i></button>
            <p className="font-bold text-sm">Record Feedback</p>
            <p className="text-xs text-gray-400">Speak in your language [cite: 35]</p>
          </div>
        </div>

        {/* Textbox */}
        <div className="space-y-4">
          <textarea className="w-full rounded-2xl border-none bg-white p-4 text-sm focus:ring-2 focus:ring-green-500 shadow-inner" rows="4" placeholder="Tell us how we can improve..."></textarea>
          <button className="w-full bg-green-600 text-white py-4 rounded-full font-bold shadow-lg hover:bg-green-700 transition">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
