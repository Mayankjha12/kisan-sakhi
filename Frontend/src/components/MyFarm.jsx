import React from "react";

const MyFarm = () => {
  const farmFields = [
    {
      id: "A",
      name: "Wheat Field - Zone A",
      status: "Healthy",
      healthScore: 85,
      issues: null,
      recommendations: [
        "Continue current watering schedule.",
        "Nitrogen fertilizer suggested next week."
      ]
    },
    {
      id: "B",
      name: "Rice Field - Zone B",
      status: "Needs Attention",
      healthScore: 62,
      issues: [
        "Leaf tip yellowing observed.",
        "Signs of nutrient deficiency detected."
      ],
      recommendations: [
        "Increase nitrogen mix slightly.",
        "Re-check water pH before irrigation."
      ]
    },
    {
      id: "C",
      name: "Cotton Field - Zone C",
      status: "Critical",
      healthScore: 35,
      issues: [
        "Heavy pest activity recorded.",
        "Possible bollworm damage."
      ],
      recommendations: [
        "Immediate pesticide support recommended.",
        "Remove heavily damaged crop sections."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8 font-inter transition-all duration-300">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              My Farm Dashboard
            </h2>
            <p className="text-gray-500 text-sm">Smart insights for better crop management</p>
          </div>
          <button className="bg-white border px-5 py-2 rounded-xl text-sm shadow-md hover:shadow-lg transition">
            Voice Assistance
          </button>
        </header>

        {/* NEW SECTION - AI & SCAN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* AI Report Card */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold">AI Farm Health Report</h3>
            <p className="text-sm opacity-90 mt-1">Latest automated analysis summary</p>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white/15 p-3 rounded-xl text-center">
                <p className="text-xs opacity-80">Health</p>
                <p className="text-2xl font-bold">76%</p>
              </div>
              <div className="bg-white/15 p-3 rounded-xl text-center">
                <p className="text-xs opacity-80">Issues</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="bg-white/15 p-3 rounded-xl text-center">
                <p className="text-xs opacity-80">Urgent</p>
                <p className="text-2xl font-bold text-yellow-300">Yes</p>
              </div>
            </div>

            <button className="mt-5 bg-white text-green-700 px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
              View Full AI Report
            </button>
          </div>

          {/* Scan Image Card */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border">
            <h3 className="font-bold text-gray-800 text-lg">Drone / Field Scan</h3>
            <p className="text-gray-500 text-sm mt-1">Upload scanned image for AI analysis</p>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mt-4">
              <p className="text-sm text-gray-600 mb-3">Click to upload field scan image</p>
              <input type="file" className="w-full cursor-pointer" />
            </div>

            <button className="mt-5 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
              Upload & Analyze
            </button>
          </div>

        </div>

        {/* Summary Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{label: "Total Fields", value: 3},{label: "Healthy", value: 1},{label: "Needs Attention", value: 1},{label: "Critical", value: 1}].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-xl transition">
              <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wide">{item.label}</p>
              <p className="text-3xl font-bold text-gray-800">{item.value}</p>
            </div>
          ))}
        </section>

        {/* Main Layout */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-gray-700">Field Condition Reports</h3>

            {farmFields.map((field) => (
              <div key={field.id} className="bg-white p-6 shadow-md border rounded-3xl hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-gray-800">{field.name}</h4>
                <p className="text-sm text-gray-600">Status: {field.status}</p>
                <p className="text-sm text-gray-600">Health Score: {field.healthScore}%</p>

                {field.issues && (
                  <div className="mt-4">
                    <h5 className="text-xs font-bold text-gray-500 uppercase">Issues Noted</h5>
                    <ul className="text-sm text-gray-700 space-y-1 mt-1">
                      {field.issues.map((issue, i) => <li key={i}>- {issue}</li>)}
                    </ul>
                  </div>
                )}

                <div className="mt-4 bg-green-50 p-5 border border-green-200 rounded-2xl">
                  <h5 className="text-xs font-bold text-green-700 uppercase">Recommended Actions</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    {field.recommendations.map((r, i) => <li key={i}>- {r}</li>)}
                  </ul>
                </div>

                <p className="text-[11px] text-gray-400 mt-4 border-t pt-2">
                  Last check: {field.id === "A" ? "2 hrs ago" : field.id === "B" ? "1 hr ago" : "30 mins ago"}
                </p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-md border hover:shadow-xl transition">
              <h4 className="font-bold text-gray-800 mb-4">Farm Overview</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Total Area</span><b>5 Acres</b></div>
                <div className="flex justify-between"><span>Region</span><b>Maharashtra</b></div>
                <div className="flex justify-between"><span>Soil Type</span><b>Black Soil</b></div>
                <div className="flex justify-between"><span>Irrigation</span><b>Canal + Borewell</b></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-md border text-center hover:shadow-xl transition">
              <p className="text-xs font-bold text-gray-500 mb-2">Voice Input</p>
              <button className="w-full py-3 bg-green-600 rounded-xl text-white hover:bg-green-700 transition">
                Start Listening
              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default MyFarm;
