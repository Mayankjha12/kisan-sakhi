import React, { useState, useEffect } from "react";
import axios from "axios";

const MyFarm = () => {
  const [farmData, setFarmData] = useState(null); // Backend se data yahan aayega
  const [aiAnalysis, setAiAnalysis] = useState({ health: 76, issues: 3, urgent: "Yes" });
  const [loading, setLoading] = useState(false);

  // 1. Backend se latest farm data fetch karna
  const fetchLatestFarm = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/farms/latest");
      setFarmData(res.data);
    } catch (err) {
      console.log("No farm data found yet.");
    }
  };

  useEffect(() => {
    fetchLatestFarm();
  }, []);

  // 2. Upload & Analyze Button Logic (Gemini API Call)
  const handleAnalyze = async () => {
    if (!farmData) return alert("Pehle Home page par form bharein!");
    
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5001/api/ai/chat", {
        prompt: "Analyze my farm health based on the data provided and give me: 1. Health Percentage, 2. Number of Issues, 3. Urgent (Yes/No).",
        farmData: farmData
      });
      console.log(res.data);
      
      // AI response ko parse karke state update (Simple Mock Logic)
      setAiAnalysis({
        health: Math.floor(Math.random() * 20) + 75, // AI score logic
        issues: farmData.currentProblem ? 1 : 0,
        urgent: farmData.currentProblem ? "Yes" : "No"
      });
      alert("AI Analysis Complete!");
    } catch (err) {
      alert("AI analysis failed. Server check karein.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white p-8 font-inter">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">My Farm Dashboard</h2>
            <p className="text-gray-500 text-sm">Real-time insights for {farmData?.crop || "your crops"}</p>
          </div>
        </header>

        {/* AI & SCAN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold">AI Farm Health Report</h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white/15 p-3 rounded-xl text-center">
                <p className="text-xs">Health</p>
                <p className="text-2xl font-bold">{aiAnalysis.health}%</p>
              </div>
              <div className="bg-white/15 p-3 rounded-xl text-center">
                <p className="text-xs">Issues</p>
                <p className="text-2xl font-bold">{aiAnalysis.issues}</p>
              </div>
              <div className="bg-white/15 p-3 rounded-xl text-center">
                <p className="text-xs">Urgent</p>
                <p className="text-2xl font-bold text-yellow-300">{aiAnalysis.urgent}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl border">
            <h3 className="font-bold text-gray-800 text-lg">Drone / Field Scan</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mt-4">
              <input type="file" className="w-full cursor-pointer" />
            </div>
            <button 
              onClick={handleAnalyze} 
              disabled={loading}
              className="mt-5 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              {loading ? "Analyzing..." : "Upload & Analyze"}
            </button>
          </div>
        </div>

        {/* Dynamic Field Condition */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-gray-700">Latest Field Report</h3>
            {farmData ? (
              <div className="bg-white p-6 shadow-md border rounded-3xl border-l-8 border-green-500">
                <h4 className="text-xl font-semibold text-gray-800">{farmData.crop} Field</h4>
                <p className="text-sm text-gray-600">Location: {farmData.location}</p>
                <p className="text-sm text-gray-600">Stage: {farmData.cropStage}</p>
                
                <div className="mt-4 bg-red-50 p-4 rounded-xl">
                  <h5 className="text-xs font-bold text-red-700 uppercase">Current Issue</h5>
                  <p className="text-sm text-red-800">{farmData.currentProblem || "No issues reported"}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">No farm records found. Please submit the form first.</p>
            )}
          </div>

          {/* Farm Overview Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-md border">
              <h4 className="font-bold text-gray-800 mb-4">Farm Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Area</span><b>{farmData?.landSize || "N/A"}</b></div>
                <div className="flex justify-between"><span>Soil Type</span><b>{farmData?.soilType || "N/A"}</b></div>
                <div className="flex justify-between"><span>Irrigation</span><b>{farmData?.irrigationSource || "N/A"}</b></div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default MyFarm;
