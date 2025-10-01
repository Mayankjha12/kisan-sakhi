import React, { useState, useEffect } from 'react';

function ChatbotResult({ langData }) {
    const [latestData, setLatestData] = useState(null);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    // --- SIMULATED ML & GEMINI RESPONSE DATA ---
    const SIMULATED_PREDICTION = "45.2"; 
    const SIMULATED_ADVICE = 
        `Namaste, KrishiMitra mein aapka swagat hai!

Based on our analysis of your inputs (Crop: ${latestData?.crop}, Problem: ${latestData?.problem}), 
we have the following data-driven insights:

1. ML Prediction: Estimated Yield is ${SIMULATED_PREDICTION} quintals/acre.
2. Innovative Solution: Since you reported '${latestData?.problem}', we recommend implementing a targeted drip irrigation schedule with a 15% reduction in water usage, specifically during the ${latestData?.cropStage} stage, to boost resource efficiency and maintain the forecasted yield.

Aapke anya sawalon ke liye, main yahan hoon.`;
    // --- END SIMULATED DATA ---

    // Load the latest data from Local Storage
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('krishiSakhiData'));
        if (storedData && storedData.length > 0) {
            setLatestData(storedData[storedData.length - 1]);
        }
    }, []);

    const messages = [
        { sender: 'ai', text: SIMULATED_ADVICE }
        // Future messages from user interaction would be added here
    ];

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        
        // This simulates sending the follow-up question to the Gemini API
        setIsLoading(true);
        console.log("Sending query to Gemini API (Simulated):", input);
        
        // In a real app, you would fetch data here. We simulate the delay.
        setTimeout(() => {
            setIsLoading(false);
            alert(`Query Sent: "${input}". The real Gemini API would respond now.`);
            setInput('');
        }, 2000);
    };


    if (!latestData) {
        return <div className="text-center text-lg text-gray-500 py-20">Loading results...</div>;
    }

    return (
        <div className="flex justify-center py-12 px-4">
            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden">
                
                <div className="p-4 bg-green-700 text-white font-poppins font-bold text-xl text-center">
                    KrishiSakhi AI Assistant
                </div>

                <div className="chat-window h-[60vh] overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((msg, index) => (
                        <div key={index} className="flex justify-start">
                            <div className="max-w-md p-3 rounded-xl shadow-sm bg-green-100 text-gray-800 border border-green-200 whitespace-pre-wrap">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex justify-start">
                            <div className="bg-green-100 text-gray-800 p-3 rounded-xl shadow-md">
                                KrishiSakhi is typing...
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area (For follow-up questions) */}
                <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200 flex gap-2">
                    <textarea 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" 
                        rows="1" 
                        placeholder="Type your question here, or use the microphone (simulated)..."
                        disabled={isLoading}
                    />
                    <button 
                        type="submit" 
                        className={`px-4 py-2 text-white font-bold rounded-lg transition duration-300 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                        disabled={isLoading}
                    >
                        Send
                    </button>
                    {/* Voice Input Button Placeholder */}
                     <button type="button" className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" disabled={isLoading}>
                         <i className="fa-solid fa-microphone"></i>
                     </button>
                </form>
            </div>
        </div>
    );
}

export default ChatbotResult;
