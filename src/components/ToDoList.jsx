import React from 'react';

const ToDoList = ({ langData }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-lato">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <i className="fa-solid fa-wand-magic-sparkles text-green-600"></i> Smart To-Do List
            </h2>
            <p className="text-gray-500 text-sm">AI-generated tasks based on your crops & weather</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border px-4 py-2 rounded-xl shadow-sm text-sm font-bold flex items-center gap-2">
              <i className="fa-solid fa-volume-high"></i> Listen All
            </button>
            <button className="bg-white border p-2 rounded-xl shadow-sm text-gray-400">
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        </div>

        {/* Urgent Action Banner */}
        <div className="bg-red-50 border border-red-100 p-6 rounded-[2rem] flex items-center gap-5 shadow-sm">
          <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div className="flex-grow">
            <p className="font-bold text-red-800 text-lg">Urgent Action Required!</p>
            <p className="text-red-700 text-sm opacity-80">Cotton Field C needs immediate pest control. Bollworm infestation detected - apply treatment before 10 AM for best results.</p>
            <div className="flex items-center gap-2 mt-2">
                <button className="text-red-600 font-bold underline text-sm">View Task &gt;</button>
                <i className="fa-solid fa-volume-high text-red-400 text-xs"></i>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Task Lists */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tabs */}
            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <i className="fa-regular fa-clock"></i> Today
              </button>
              <button className="bg-white border text-gray-500 px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <i className="fa-regular fa-calendar"></i> This Week
              </button>
              <button className="bg-white border text-gray-500 px-6 py-2 rounded-full text-sm font-medium">All Tasks</button>
            </div>

            {/* Task 1: Pest Control */}
            <div className="bg-white border border-red-100 rounded-[2rem] p-6 shadow-sm space-y-4 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 mt-1 border-2 border-gray-200 rounded-full cursor-pointer hover:border-green-500 transition"></div>
                  <div>
                    <div className="flex gap-2 mb-1">
                        <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-md font-extrabold uppercase">⚠️ Urgent</span>
                        <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-extrabold uppercase">Pest Control</span>
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">Apply Pest Control</h4>
                    <p className="text-sm text-gray-400">Spray Neem-based pesticide on Cotton Field C to control bollworm infestation</p>
                  </div>
                </div>
                <div className="text-red-500 bg-red-50 p-3 rounded-2xl"><i className="fa-solid fa-bug text-xl"></i></div>
              </div>
              <p className="text-xs text-gray-400 font-medium flex items-center gap-1"><i className="fa-regular fa-clock"></i> Today, Before 10 AM</p>
              
              <div className="bg-green-50/60 p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">Why this task?</p>
                <p className="text-sm text-gray-600 italic">"AI detected heavy bollworm damage in your cotton field. Early morning application is most effective when pests are less active."</p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button className="flex items-center gap-2 text-sm font-bold text-gray-600 border px-4 py-1.5 rounded-xl hover:bg-gray-50">
                  <i className="fa-solid fa-volume-high text-green-600"></i> Listen
                </button>
                <div className="flex gap-4 text-gray-300">
                    <i className="fa-regular fa-thumbs-up hover:text-green-500 cursor-pointer"></i>
                    <i className="fa-regular fa-thumbs-down hover:text-red-500 cursor-pointer"></i>
                </div>
              </div>
            </div>

            {/* Task 2: Irrigation (Continuation from Image 3) */}
            <div className="bg-white border border-orange-100 rounded-[2rem] p-6 shadow-sm space-y-4 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 mt-1 border-2 border-gray-200 rounded-full cursor-pointer hover:border-green-500 transition"></div>
                  <div>
                    <div className="flex gap-2 mb-1">
                        <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-md font-extrabold uppercase">High Priority</span>
                        <span className="text-[10px] bg-blue-50 text-blue-500 px-2 py-0.5 rounded-md font-extrabold uppercase">Irrigation</span>
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">Irrigate Wheat Field</h4>
                    <p className="text-sm text-gray-400">Water Wheat Field A - soil moisture is at 35%, optimal is 50-60%</p>
                  </div>
                </div>
                <div className="text-orange-500 bg-orange-50 p-3 rounded-2xl"><i className="fa-solid fa-droplet text-xl"></i></div>
              </div>
              <p className="text-xs text-gray-400 font-medium flex items-center gap-1"><i className="fa-regular fa-clock"></i> Today, 6:00 PM</p>
              
              <div className="bg-green-50/60 p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">Why this task?</p>
                <p className="text-sm text-gray-600 italic">"Based on weather forecast (no rain expected for 5 days) and current soil moisture sensor data, irrigation is recommended today."</p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button className="flex items-center gap-2 text-sm font-bold text-gray-600 border px-4 py-1.5 rounded-xl hover:bg-gray-50">
                  <i className="fa-solid fa-volume-high text-green-600"></i> Listen
                </button>
                <div className="flex gap-4 text-gray-300">
                    <i className="fa-regular fa-thumbs-up hover:text-green-500 cursor-pointer"></i>
                    <i className="fa-regular fa-thumbs-down hover:text-red-500 cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Stats & Insights */}
          <div className="space-y-6">
            
            {/* Task Progress Panel */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
               <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-100" strokeWidth="4" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#22c55e" strokeWidth="4" 
                            strokeDasharray="17, 100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-black text-lg text-gray-800">17%</div>
                  </div>
                  <div>
                    <p className="text-xl font-black text-gray-800">1/6</p>
                    <p className="text-gray-400 text-xs font-bold uppercase">Tasks completed today</p>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="bg-green-50/50 p-3 rounded-2xl text-center border border-green-100">
                    <i className="fa-solid fa-circle-check text-green-500 block mb-1"></i>
                    <span className="text-lg font-black text-green-700 block">1</span>
                    <span className="text-[10px] font-bold text-green-600 uppercase">Done</span>
                  </div>
                  <div className="bg-orange-50/50 p-3 rounded-2xl text-center border border-orange-100">
                    <i className="fa-regular fa-clock text-orange-500 block mb-1"></i>
                    <span className="text-lg font-black text-orange-700 block">5</span>
                    <span className="text-[10px] font-bold text-orange-600 uppercase">Pending</span>
                  </div>
                  <div className="bg-red-50/50 p-3 rounded-2xl text-center border border-red-100">
                    <i className="fa-solid fa-triangle-exclamation text-red-500 block mb-1"></i>
                    <span className="text-lg font-black text-red-700 block">1</span>
                    <span className="text-[10px] font-bold text-red-600 uppercase">Urgent</span>
                  </div>
               </div>
            </div>

            {/* AI Insights Panel */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
               <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-wand-magic-sparkles text-green-600"></i> AI Insights
               </h4>
               <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-2xl border-l-4 border-green-500">
                    <p className="text-xs font-bold text-green-700 mb-1">Weather Impact</p>
                    <p className="text-[11px] text-green-600 font-medium leading-tight">No rain expected for 5 days. Plan irrigation accordingly.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-2xl border-l-4 border-orange-500">
                    <p className="text-xs font-bold text-orange-700 mb-1">Crop Stage Alert</p>
                    <p className="text-[11px] text-orange-600 font-medium leading-tight">Rice is in critical tillering stage. Nitrogen is essential now.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-2xl border-l-4 border-blue-500">
                    <p className="text-xs font-bold text-blue-700 mb-1">Soil Condition</p>
                    <p className="text-[11px] text-blue-600 font-medium leading-tight">Wheat field soil moisture optimal. Cotton needs attention.</p>
                  </div>
               </div>
            </div>

            {/* Voice Help CTA */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-green-600 font-bold">
                 <i className="fa-solid fa-volume-high"></i> <span>Voice Help</span>
              </div>
              <p className="text-xs text-gray-400 font-medium">Listen to task instructions</p>
              <button className="w-full bg-green-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:bg-green-700 transition">
                <i className="fa-solid fa-play"></i> Play Daily Summary
              </button>
            </div>

            {/* Quick Tips Panel */}
            <div className="p-6">
                <h5 className="font-bold text-gray-800 mb-4 uppercase tracking-widest text-[10px]">Quick Tips</h5>
                <ul className="space-y-3">
                    <li className="text-xs text-gray-500 flex items-start gap-2 italic">
                        <i className="fa-solid fa-check text-green-500 mt-0.5"></i>
                        Complete urgent tasks before 10 AM
                    </li>
                    <li className="text-xs text-gray-500 flex items-start gap-2 italic">
                        <i className="fa-solid fa-check text-green-500 mt-0.5"></i>
                        Use thumbs up/down to improve AI
                    </li>
                    <li className="text-xs text-gray-500 flex items-start gap-2 italic">
                        <i className="fa-solid fa-check text-green-500 mt-0.5"></i>
                        Tap "Listen" for voice instructions
                    </li>
                    <li className="text-xs text-gray-500 flex items-start gap-2 italic">
                        <i className="fa-solid fa-check text-green-500 mt-0.5"></i>
                        Check weather before irrigation
                    </li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
