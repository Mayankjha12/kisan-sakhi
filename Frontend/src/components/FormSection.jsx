import React, { useState } from 'react';
import axios from 'axios';
import FormInputs from './FormInputs';

// Language Map for display names
const languageMap = {
    "en": "English", "hi": "Hindi", "pa": "Punjabi", "mr": "Marathi", "gu": "Gujarati", 
    "bn": "Bengali", "ta": "Tamil", "te": "Telugu", "kn": "Kannada", "ml": "Malayalam", 
    "or": "Odia", "as": "Assamese", "ur": "Urdu", "sd": "Sindhi", "sa": "Sanskrit", 
    "ks": "Kashmiri", "kok": "Konkani", "mai": "Maithili", "ne": "Nepali"
};
const allLangCodes = Object.keys(languageMap);

const FormSection = ({ langData, currentLang, onLangChange, onFormSubmitSuccess }) => {
    const [formData, setFormData] = useState({});
    const [voiceOutput, setVoiceOutput] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    
    // NEW: Chatbot States
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatReply, setChatReply] = useState("");
    const [isChatLoading, setIsChatLoading] = useState(false);

    const voiceLangCodes = {
        'en': 'en-IN', 'hi': 'hi-IN', 'pa': 'pa-IN', 'mr': 'mr-IN', 'gu': 'gu-IN', 'bn': 'bn-IN', 'ta': 'ta-IN', 'te': 'te-IN',
        'kn': 'kn-IN', 'ml': 'ml-IN', 'or': 'or-IN', 'as': 'as-IN', 'ur': 'ur-IN', 'sd': 'sd-IN', 'sa': 'sa-IN', 'ks': 'ks-IN',
        'kok': 'kok-IN', 'mai': 'mai-IN', 'ne': 'ne-IN'
    };

    // FINAL SUBMIT LOGIC with Render URL and Gemini Chat
    const handleSubmit = async (e) => {
        e.preventDefault();
        const backendURL = 'https://kisan-sakhi-new.onrender.com'; // Tera Live Render URL
        
        try {
            // 1. Submit to MongoDB
            const response = await axios.post(`${backendURL}/api/farms/submit`, {
                ...formData,
                voiceTranscript: voiceOutput,
                dateSubmitted: new Date().toISOString()
            });

            if (response.data.success) {
                console.log("Data Saved:", response.data);
                
                // 2. Trigger Gemini AI Expert Advice
                setIsChatLoading(true);
                try {
                    const aiRes = await axios.post(`${backendURL}/api/ai/chat`, {
                        prompt: "Mera data submit ho gaya hai, mujhe expert advice dein.",
                        farmData: formData
                    });
                    setChatReply(aiRes.data.reply);
                    setIsChatOpen(true); // Pop-up khulega
                } catch (aiErr) {
                    console.error("AI Error:", aiErr);
                    alert("Data save ho gaya, par AI abhi connect nahi ho paya.");
                }
                setIsChatLoading(false);

                // Optional: Navigation or Success Callback
                if (onFormSubmitSuccess) {
                    // Yahan aap navigation delay kar sakte hain chat dikhane ke liye
                    // onFormSubmitSuccess(); 
                }
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Maaf kijiye, server connect nahi ho paya. Render URL check karein.");
        }
    };

    const startVoiceRecording = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setVoiceOutput("Speech Recognition not supported.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = voiceLangCodes[currentLang] || voiceLangCodes.en;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setIsRecording(true);
            setVoiceOutput("Listening...");
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setVoiceOutput(transcript);
            setFormData(prev => ({ ...prev, currentProblem: transcript }));
        };

        recognition.onerror = () => setIsRecording(false);
        recognition.onend = () => setIsRecording(false);

        if (isRecording) {
            recognition.stop();
        } else {
            recognition.start();
        }
    };
    
    return (
        <section id="form-section" className="py-12 flex justify-center bg-gray-50 min-h-screen relative">
            <div className="w-full max-w-6xl px-4">
                <h2 className="text-center text-4xl font-bold text-green-600 mb-8 font-poppins">
                    {langData.formHeading}
                </h2>
                
                <div className="flex flex-col lg:flex-row gap-8 shadow-xl rounded-3xl bg-white p-6 md:p-10 border border-gray-100">
                    
                    {/* Left Panel: Voice Input */}
                    <div className="flex-1 p-8 rounded-2xl bg-green-50/50 border border-green-100 flex flex-col items-center justify-start text-center max-w-full lg:max-w-md">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all ${isRecording ? 'bg-red-100 text-red-500 animate-pulse' : 'bg-green-100 text-green-600'}`}>
                            <i className="fa-solid fa-microphone text-3xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{langData.voiceInputTitle}</h3>
                        <p className="text-sm text-gray-500 mb-6">{langData.voiceInputSubtitle}</p>
                        
                        <button 
                            type="button"
                            onClick={startVoiceRecording}
                            className={`px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all w-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-600 hover:bg-green-700'}`}
                        >
                            {isRecording ? 'Stop Recording' : 'Start Voice Input'}
                        </button>
                        
                        <div className="mt-6 p-4 bg-white border border-green-100 text-gray-600 rounded-xl text-sm min-h-[80px] w-full italic">
                            {voiceOutput || "Your voice transcript will appear here..."}
                        </div>
                    </div>

                    {/* Right Panel: Form Fields */}
                    <div className="flex-1 p-2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                            <i className="fa-solid fa-file-invoice text-green-600"></i>
                            {langData.formDetailsHeading}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <FormInputs langData={langData} setFormData={setFormData} />
                            <button 
                                type="submit" 
                                disabled={isChatLoading}
                                className={`w-full px-8 py-4 text-white font-bold rounded-2xl transition-all shadow-xl mt-4 text-lg ${isChatLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700 shadow-green-200'}`}
                            >
                                {isChatLoading ? 'Processing AI Advice...' : langData.submitBtn}
                            </button>
                        </form>
                    </div>
                </div>

                {/* GEMINI CHATBOT POPUP */}
                {isChatOpen && (
                    <div className="fixed bottom-10 right-10 w-96 bg-white shadow-2xl rounded-3xl p-6 border-t-8 border-green-600 z-50 animate-in fade-in zoom-in duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                                    <i className="fa-solid fa-robot text-xs"></i>
                                </div>
                                <h4 className="font-bold text-gray-800">KrishiSakhi AI Expert</h4>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {chatReply || "Fasal ki jaanch kar raha hoon..."}
                            </p>
                        </div>
                        <button 
                            onClick={() => window.location.href = '/my-farm'}
                            className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-green-700 transition-all"
                        >
                            Detailed Report Dekhein
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FormSection;
