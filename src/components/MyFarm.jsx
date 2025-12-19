import React from 'react';

const MyFarm = ({ langData }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">My Farm Dashboard</h2>
          <p className="text-gray-500">AI-powered insights for your crops [cite: 38]</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm bg-white shadow-sm">
          <i className="fa-solid fa-volume-high"></i> Voice Guide [cite: 35]
        </button>
      </header>

      {/* Stats Cards [cite: 78, 85, 82] */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm">
          <p className="text-xs text-gray-500 uppercase">Total Crops</p>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-l-4 border-green-400 shadow-sm">
          <p className="text-xs text-gray-500 uppercase">Healthy</p>
          <p className="text-2xl font-bold">1</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-l-4 border-orange-400 shadow-sm">
          <p className="text-xs text-gray-500 uppercase">Needs Attention</p>
          <p className="text-2xl font-bold">1</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-l-4 border-red-500 shadow-sm">
          <p className="text-xs text-gray-500 uppercase">Critical</p>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex gap-4">
            <button className="flex-1 bg-green-600 text-white p-6 rounded-2xl flex flex-col items-center gap-2">
              <i className="fa-solid fa-camera text-2xl"></i>
              <span className="font-bold">Scan Crop</span>
            </button>
            <button className="flex-1 bg-white border-2 border-green-100 p-6 rounded-2xl flex flex-col items-center gap-2">
              <i className="fa-solid fa-comment-dots text-2xl text-green-600"></i>
              <span className="font-bold">Ask AI</span>
            </button>
          </div>

          {/* Health Analysis Card [cite: 39, 68] */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Wheat Field A</h3>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">85% Healthy</span>
            </div>
            <div className="bg-green-50 p-4 rounded-xl space-y-2">
              <p className="font-bold text-green-800 text-sm">AI Recommendations:</p>
              <ul className="text-sm text-green-700 list-disc ml-4">
                <li>Continue current watering schedule [cite: 89]</li>
                <li>Apply nitrogen fertilizer next week [cite: 68]</li>
              </ul>
            </div>
            <button className="mt-4 text-gray-500 text-xs flex items-center gap-1">
               <i className="fa-solid fa-volume-high"></i> Listen [cite: 35]
            </button>
          </div>
        </div>

        {/* Sidebar Info [cite: 39, 57] */}
        <div className="space-y-6">
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold mb-4">Today's Weather [cite: 39]</h4>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">31°C</span>
              <i className="fa-solid fa-sun text-yellow-400 text-3xl"></i>
            </div>
            <p className="text-gray-400 text-sm">Sunny - Maharashtra [cite: 106]</p>
          </div>
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold mb-4">Farm Overview [cite: 50]</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Area:</span><span className="font-bold">5 Acres</span></div>
              <div className="flex justify-between"><span>Soil:</span><span className="font-bold">Black Soil</span></div>
              <div className="flex justify-between"><span>Irrigation:</span><span className="font-bold">Canal</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFarm;
