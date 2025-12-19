import React from 'react';

const ToDoList = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <i className="fa-solid fa-wand-magic-sparkles text-green-600"></i> Smart To-Do List [cite: 39]
      </h2>

      {/* Urgent Alert [cite: 68] */}
      <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-4">
        <i className="fa-solid fa-triangle-exclamation text-red-500 text-xl"></i>
        <div className="flex-grow text-sm">
          <p className="font-bold text-red-800">Urgent Action Required!</p>
          <p className="text-red-700">Cotton Field C needs immediate pest control. [cite: 33, 79]</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {/* Task Card [cite: 39] */}
          <div className="bg-white border rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <input type="checkbox" className="w-5 h-5 accent-green-600 mt-1" />
                <div>
                  <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded uppercase font-bold">Urgent</span>
                  <h4 className="font-bold">Apply Pest Control [cite: 68]</h4>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600 italic border-l-4 border-green-500">
              "AI detected heavy bollworm damage. Early morning application is best." [cite: 39]
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span><i className="fa-regular fa-clock"></i> Today, Before 10 AM</span>
              <button className="text-green-600 font-bold"><i className="fa-solid fa-volume-high"></i> Listen</button>
            </div>
          </div>
        </div>

        {/* AI Sidebar [cite: 39] */}
        <div className="space-y-4">
          <div className="bg-white border rounded-2xl p-5 shadow-sm">
            <h4 className="font-bold text-green-600 mb-4 border-b pb-2">AI Insights</h4>
            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <p className="font-bold text-blue-600">Weather Impact [cite: 57]</p>
                <p className="text-gray-600">No rain expected for 5 days. [cite: 79]</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-orange-600">Soil Condition [cite: 57]</p>
                <p className="text-gray-600">Wheat field moisture optimal. [cite: 89]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
