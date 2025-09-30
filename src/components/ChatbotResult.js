import React, { useEffect, useState } from 'react';

function ChatbotResult({ langData }) {
    const [latestData, setLatestData] = useState(null);
    
    // --- SIMULATED ML & GEMINI RESPONSE DATA ---
    // You must update these two variables with the ACTUAL output 
    // you get when you run your final Colab Notebook.
    const SIMULATED_PREDICTION = "45.2"; // Example: Predicted Yield in Quintals/acre
    const SIMULATED_ADVICE = 
        "Namaste kisan bhai/behan! Aapke Rice fasal ke liye Flowering stage mein, humari prediction hai ki aapki upaj (yield) 45.2 quintals/acre ho sakti hai. Aapne Disease ki samasya batayi hai, iske liye aap turant [Fungicide X] ka chhidkav karein aur agle 5 dinon tak paani na de. Aapka prediction achha hai, bas beemari ko control karein.";
    // --- END SIMULATED DATA ---

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('krishiSakhiData'));
        if (storedData && storedData.length > 0) {
            setLatestData(storedData[storedData.length - 1]); // Get the last submitted entry
        }
    }, []);

    if (!latestData) {
        return <div className="text-center text-lg text-gray-500 mt-10">No recent submission data found to generate prediction.</div>;
    }

    // This section simulates how the frontend uses the ML/Gemini output
    return (
        <div className="mt-12 p-8 bg-gray-100 text-gray-800 rounded-xl shadow-2xl border-t-4 border-green-600">
            <h3 className="text-3xl font-bold mb-4 flex items-center text-green-700">
                <i className="fa-solid fa-robot mr-3"></i> KrishiSakhi AI ka Jawab (ML Based)
            </h3>
            
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <p className="text-xl font-semibold text-green-800">
                    📈 **ML Prediction:** Estimated Yield is **{SIMULATED_PREDICTION} quintals/acre**.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                    (Based on your last submission: Crop: {latestData.crop}, Problem: {latestData.problem})
                </p>
            </div>

            <h4 className="text-lg font-bold mb-3">Personalized Advice from Gemini:</h4>
            <p className="text-base leading-relaxed whitespace-pre-wrap">
                {SIMULATED_ADVICE}
            </p>
            
            <p className="mt-4 text-xs opacity-70">
                *Note: This simulation demonstrates how our ML prediction informs the Gemini Chatbot's tailored response.*
            </p>
        </div>
    );
}

export default ChatbotResult;
