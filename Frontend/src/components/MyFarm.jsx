import React from 'react';

const MyFarm = ({ langData }) => {
  // Mock data representing the continuation of your farm fields
  const farmFields = [
    {
      id: 'A',
      name: 'Wheat Field A',
      status: 'Healthy',
      healthScore: 85,
      statusColor: 'text-green-600',
      borderColor: 'border-green-100',
      accentColor: 'bg-green-500',
      recommendations: [
        'Continue current watering schedule',
        'Apply nitrogen fertilizer next week'
      ]
    },
    {
      id: 'B',
      name: 'Rice Paddy B',
      status: 'Needs Attention',
      healthScore: 62,
      statusColor: 'text-orange-600',
      borderColor: 'border-orange-100',
      accentColor: 'bg-orange-500',
      issues: ['Yellow leaf tips detected', 'Possible nitrogen deficiency'],
      recommendations: [
        'Increase nitrogen fertilizer by 20%',
        'Check water pH levels',
        'Monitor for 3 days before next action'
      ]
    },
    {
      id: 'C',
      name: 'Cotton Field C',
      status: 'Critical',
      healthScore: 35,
      statusColor: 'text-red-600',
      borderColor: 'border-red-100',
      accentColor: 'bg-red-500',
      issues: ['Heavy pest infestation detected', 'Bollworm damage visible', 'Leaf curl disease spreading'],
      recommendations: [
        'Apply Neem-based pesticide immediately',
        'Remove heavily damaged plants',
        'Contact local agricultural officer'
      ]
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-lato">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">My Farm Dashboard</h2>
            <p className="text-gray-500 text-sm italic">AI-powered insights for your crops</p>
          </div>
          <button className="bg-white border px-4 py-2 rounded-xl shadow-sm text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition">
            <i className="fa-solid fa-volume-high text-green-600"></i> Voice Guide
          </button>
        </div>

        {/* Top Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Crops', value: 3, icon: 'fa-leaf', border: 'border-l-green-500' },
            { label: 'Healthy', value: 1, icon: 'fa-circle-check', border: 'border-l-blue-400' },
            { label: 'Needs Attention', value: 1, icon: 'fa-triangle-exclamation', border: 'border-l-orange-400' },
            { label: 'Critical', value: 1, icon: 'fa-bug', border: 'border-l-red-500' }
          ].map((stat, i) => (
            <div key={i} className={`bg-white p-5 rounded-2xl shadow-sm border-l-4 ${stat.border} flex items-center gap-4`}>
              <div className="text-gray-300 text-xl"><i className={`fa-solid ${stat.icon}`}></i></div>
              <div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-black text-gray-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: List of Fields (Continuation logic) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-green-600 text-white py-8 rounded-3xl flex flex-col items-center gap-2 shadow-lg shadow-green-100 hover:bg-green-700 transition transform active:scale-95">
                <i className="fa-solid fa-camera text-3xl"></i>
                <span className="font-bold">Scan Crop</span>
                <span className="text-[10px] opacity-80 font-normal">Take photo for AI analysis</span>
              </button>
              <button className="flex-1 bg-white border-2 border-green-50 py-8 rounded-3xl flex flex-col items-center gap-2 shadow-sm hover:bg-green-50/30 transition transform active:scale-95">
                <i className="fa-solid fa-comment-dots text-3xl text-green-600"></i>
                <span className="font-bold text-gray-700">Ask AI</span>
                <span className="text-[10px] text-gray-400 font-normal">Chat with assistant</span>
              </button>
            </div>

            <h3 className="text-lg font-bold text-gray-700 flex items-center gap-2 pt-4">
               <i className="fa-solid fa-seedling text-green-600"></i> Crop Health Analysis
            </h3>

            {/* Render all fields dynamically based on the images provided */}
            {farmFields.map((field) => (
              <div key={field.id} className={`bg-white border ${field.borderColor} rounded-[2rem] p-6 md:p-8 shadow-sm relative overflow-hidden transition-all hover:shadow-md`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${field.accentColor} bg-opacity-10`}>
                      <i className={`fa-solid fa-leaf ${field.statusColor}`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{field.name}</h4>
                      <p className={`${field.statusColor} text-xs font-bold flex items-center gap-1`}>
                        <i className={`fa-solid ${field.healthScore > 70 ? 'fa-circle-check' : 'fa-triangle-exclamation'}`}></i>
                        {field.status}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress Circle Logic */}
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-100" strokeWidth="3" />
                      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="3" 
                        strokeDasharray={`${field.healthScore}, 100`} 
                        className={`${field.statusColor} transition-all duration-1000`} 
                        strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-black text-gray-800">
                      {field.healthScore}%
                    </div>
                  </div>
                </div>

                {/* Issues Section (Only if present) */}
                {field.issues && (
                  <div className="mb-4 space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                      <i className="fa-solid fa-circle-info"></i> Issues Detected
                    </p>
                    <ul className="space-y-1">
                      {field.issues.map((issue, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-red-400 rounded-full"></span> {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* AI Recommendations Box */}
                <div className="bg-green-50/60 p-5 rounded-2xl border border-green-100/50">
                  <p className="text-[10px] font-bold text-green-800 mb-2 flex items-center gap-1 uppercase">
                    <i className="fa-solid fa-robot"></i> AI Recommendations
                  </p>
                  <ul className="space-y-1">
                    {field.recommendations.map((rec, idx) => (
                      <li key={idx} className="text-sm text-green-700 font-medium flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-between items-center border-t border-gray-50 pt-4 text-[10px] text-gray-400">
                   <span>Last analyzed: {field.id === 'A' ? '2 hours ago' : field.id === 'B' ? '1 hour ago' : '30 mins ago'}</span>
                   <button className="flex items-center gap-1 font-bold text-gray-600 hover:text-green-600">
                     <i className="fa-solid fa-volume-high"></i> Listen
                   </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sidebar Panels */}
          <div className="space-y-6">
            
            {/* Weather Panel (From Image 1 & 4) */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
               <div className="flex justify-between items-center mb-6">
                 <h4 className="font-bold text-gray-800">Today's Weather</h4>
                 <i className="fa-solid fa-sun text-yellow-400 text-2xl animate-spin-slow"></i>
               </div>
               <div className="text-center space-y-1">
                 <p className="text-5xl font-black text-gray-800">31°C</p>
                 <p className="text-gray-400 font-medium italic text-sm">Sunny - Maharashtra</p>
               </div>
               <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-gray-50 text-[10px]">
                  <div className="text-center"><i className="fa-solid fa-droplet text-blue-400 block mb-1"></i> 65% Humidity</div>
                  <div className="text-center border-x border-gray-100"><i className="fa-solid fa-wind text-gray-400 block mb-1"></i> 12 km/h</div>
                  <div className="text-center"><i className="fa-solid fa-temperature-three-quarters text-orange-400 block mb-1"></i> 33° Feels</div>
               </div>
            </div>

            {/* Farm Overview Panel (From Image 2 & 4) */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
               <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-map-location-dot text-green-600"></i> Farm Overview
               </h4>
               <div className="space-y-4 text-sm">
                 <div className="flex justify-between border-b border-gray-50 pb-2">
                   <span className="text-gray-400">Total Area</span>
                   <span className="font-bold">5 Acres</span>
                 </div>
                 <div className="flex justify-between border-b border-gray-50 pb-2">
                   <span className="text-gray-400">Location</span>
                   <span className="font-bold">Maharashtra</span>
                 </div>
                 <div className="flex justify-between border-b border-gray-50 pb-2">
                   <span className="text-gray-400">Soil Type</span>
                   <span className="font-bold">Black Soil</span>
                 </div>
                 <div className="flex justify-between pb-2">
                   <span className="text-gray-400">Irrigation</span>
                   <span className="font-bold text-right leading-tight">Canal +<br/>Borewell</span>
                 </div>
               </div>
            </div>

            {/* Upcoming Panel (From Image 3 & 4) */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
               <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-calendar-days text-green-600"></i> Upcoming
               </h4>
               <div className="space-y-3">
                 <div className="flex items-center gap-3 p-3 bg-green-50 rounded-2xl border border-green-100/50">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      <i className="fa-solid fa-faucet-drip"></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Irrigation Scheduled</p>
                      <p className="text-[10px] text-green-600">Tomorrow, 6:00 AM</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-2xl border border-orange-100/50">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                      <i className="fa-solid fa-vial"></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Fertilizer Application</p>
                      <p className="text-[10px] text-orange-600">In 3 days</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Voice Query Box (From Image 2) */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-4">
              <p className="text-xs font-bold text-gray-400 flex items-center justify-center gap-2">
                <i className="fa-regular fa-comment-dots text-green-600"></i> Voice Query
              </p>
              <button className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-100 mx-auto hover:bg-green-700 transition">
                <i className="fa-solid fa-microphone text-2xl"></i>
              </button>
              <div>
                <p className="text-sm font-bold text-green-600">Ask anything</p>
                <p className="text-[10px] text-gray-400">Speak in your language</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFarm;
