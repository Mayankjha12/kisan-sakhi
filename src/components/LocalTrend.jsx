import React from 'react';

const LocalTrend = () => {
  const prices = [
    { name: 'Wheat', price: '₹2,450', change: '+5%' },
    { name: 'Rice', price: '₹3,200', change: '+3%' },
    { name: 'Cotton', price: '₹6,800', change: '-2%' },
    { name: 'Soybean', price: '₹4,500', change: '+8%' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 min-h-screen bg-gray-50/30">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fa-solid fa-arrow-trend-up text-green-600"></i> Local Market Trends
          </h2>
          <p className="text-gray-500 flex items-center gap-2 text-sm ml-1">
            <i className="fa-solid fa-location-dot text-green-600"></i> Maharashtra Region
          </p>
        </div>
        
        {/* Listen Button in the Header line as per 2nd image */}
        <button className="flex items-center gap-2 px-4 py-1.5 border rounded-full text-sm font-medium text-gray-700 bg-white shadow-sm hover:bg-gray-50 transition-all">
          <i className="fa-solid fa-volume-high text-green-600"></i> Listen
        </button>
      </div>
      
      {/* Price Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prices.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="bg-green-50 w-12 h-12 flex items-center justify-center rounded-2xl text-green-600">
                <i className="fa-solid fa-leaf text-xl"></i>
              </div>
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

      {/* Price Alerts CTA Box */}
      <div className="bg-green-600 text-white rounded-[2rem] p-12 text-center space-y-6 shadow-xl shadow-green-100 relative overflow-hidden mt-10">
        <div className="absolute -top-10 -right-10 opacity-10">
          <i className="fa-solid fa-indian-rupee-sign text-[12rem]"></i>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center backdrop-blur-sm">
            <i className="fa-solid fa-indian-rupee-sign text-3xl"></i>
          </div>
          <h3 className="text-3xl font-bold">Get Price Alerts</h3>
          <p className="text-green-50 max-w-md mx-auto text-lg opacity-90">
            Receive real-time notifications when market prices change for your specific crops.
          </p>
          <button className="bg-white text-green-600 px-10 py-4 rounded-2xl font-extrabold text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-lg mt-4">
            Enable Price Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalTrend;
