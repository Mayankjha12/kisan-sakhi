import React from 'react';

const LocalTrend = () => {
  const prices = [
    { name: 'Wheat', price: '₹2,450', change: '+5%' },
    { name: 'Rice', price: '₹3,200', change: '+3%' },
    { name: 'Cotton', price: '₹6,800', change: '-2%' },
    { name: 'Soybean', price: '₹4,500', change: '+8%' }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8 min-h-screen">
      <h2 className="text-3xl font-bold">Local Market Trends [cite: 22, 68]</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prices.map((item, idx) => (
          <div key={idx} className="bg-white border rounded-xl p-6 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-50 p-3 rounded-full text-green-600"><i className="fa-solid fa-leaf"></i></div>
              <div>
                <p className="text-gray-500 text-sm">{item.name}</p>
                <p className="text-xl font-bold">{item.price}/quintal</p>
              </div>
            </div>
            <span className={`font-bold px-2 py-1 rounded text-sm ${item.change.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-green-600 text-white rounded-3xl p-10 text-center space-y-4 shadow-xl">
        <i className="fa-solid fa-indian-rupee-sign text-4xl"></i>
        <h3 className="text-2xl font-bold">Get Price Alerts [cite: 102]</h3>
        <p className="opacity-90">Receive notifications when prices change for your crops.</p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Enable Price Alerts
        </button>
      </div>
    </div>
  );
};

export default LocalTrend;
