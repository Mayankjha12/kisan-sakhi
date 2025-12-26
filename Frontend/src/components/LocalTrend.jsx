import React from 'react';
// Import Recharts components
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const LocalTrend = () => {
  // Updated data: added numerical 'value' for the graph to use
  const prices = [
    { name: 'Wheat', price: '₹2,450', value: 2450, change: '+5%' },
    { name: 'Rice', price: '₹3,200', value: 3200, change: '+3%' },
    { name: 'Cotton', price: '₹6,800', value: 6800, change: '-2%' },
    { name: 'Soybean', price: '₹4,500', value: 4500, change: '+8%' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 min-h-screen bg-gray-50/30">
      {/* Page Header (PRESERVED) */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            Local Market Trends
          </h2>
        </div>

        <button className="flex items-center gap-2 px-4 py-1.5 border rounded-full text-sm font-medium text-gray-700 bg-white shadow-sm hover:bg-gray-50 transition-all">
          Listen
        </button>
      </div>

      {/* Price Cards Grid (PRESERVED) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prices.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{item.name}</p>
                <p className="text-2xl font-bold text-gray-800">{item.price}/quintal</p>
              </div>
            </div>
            <span className={`font-bold px-3 py-1.5 rounded-xl text-sm ${item.change.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>

      {/* --- ADDED LINE GRAPH SECTION --- */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Market Price Analysis</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={prices} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
              />
              <YAxis 
                hide 
                domain={['dataMin - 500', 'dataMax + 500']} 
              />
              <Tooltip 
                contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                formatter={(val) => [`₹${val}`, 'Price']}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#16a34a" 
                strokeWidth={4} 
                dot={{ r: 6, fill: '#16a34a', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Price Alerts CTA Box (PRESERVED) */}
     {/* Price Alerts CTA Box - Centered and Square */}
<div className="flex justify-center items-center w-full mt-10">
  <div className="bg-green-600 text-white rounded-[2rem] aspect-square w-full max-w-[400px] flex flex-col justify-center items-center p-8 text-center shadow-xl shadow-green-100 relative overflow-hidden">
    
    {/* Decorative Background Circles (Optional, for better square look) */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

    <div className="relative z-10 space-y-6">
      <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center backdrop-blur-sm">
        <i className="fa-solid fa-indian-rupee-sign text-3xl"></i>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-3xl font-bold leading-tight">Get Price<br/>Alerts</h3>
        <p className="text-green-50 text-sm opacity-90 px-4">
          Receive real-time notifications for your specific crops.
        </p>
      </div>

      <button className="bg-white text-green-600 px-8 py-3 rounded-2xl font-extrabold text-md hover:bg-gray-100 transition-all active:scale-95 shadow-lg">
        Enable Now
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default LocalTrend;
