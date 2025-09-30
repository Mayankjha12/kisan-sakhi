import React, { useState } from 'react';
import FormInputs from './FormInputs';
import ChatbotResult from './ChatbotResult'; // <-- IMPORT NEW COMPONENT

// --- LANGUAGE MAP (same as before) ---
const languageMap = {
    "en": "English", "hi": "Hindi", "pa": "Punjabi", "mr": "Marathi", "gu": "Gujarati", 
    "bn": "Bengali", "ta": "Tamil", "te": "Telugu", "kn": "Kannada", "ml": "Malayalam", 
    "or": "Odia", "as": "Assamese", "ur": "Urdu", "sd": "Sindhi", "sa": "Sanskrit", 
    "ks": "Kashmiri", "kok": "Konkani", "mai": "Maithili", "ne": "Nepali"
};
const allLangCodes = Object.keys(languageMap);
// --- END OF LANGUAGE MAP ---

const FormSection = ({ langData, currentLang, onLangChange }) => {
    const [formData, setFormData] = useState({});
    const [voiceOutput, setVoiceOutput] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [showResults, setShowResults] = useState(false); // <-- STATE TO CONTROL RESULT VISIBILITY
    
    // Voice Language Codes used for Speech Recognition (omitted for brevity)
    const voiceLangCodes = { /* ... */ };

    // 1. Form Submission Logic (Using Local Storage for Prototype)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const existingData = JSON.parse(localStorage.getItem('krishiSakhiData')) || [];
        const newFarmData = {
            id: Date.now(),
            dateSubmitted: new Date().toISOString(),
            ...formData
        };
        
        existingData.push(newFarmData);
        localStorage.setItem('krishiSakhiData', JSON.stringify(existingData));

        console.log("Data saved to Local Storage:", newFarmData);
        
        // Show results and scroll
        setShowResults(true);
        setTimeout(() => {
            document.getElementById('chatbot-results-anchor').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // 2. Voice Input Logic (omitted for brevity)
    const startVoiceRecording = () => { /* ... */ };
    
    return (
        <section id="form-section" className="py-12 flex justify-center bg-gray-100 min-h-screen">
            <div className="w-full max-w-6xl px-4">
                <h2 className="text-center text-4xl font-bold text-green-600 mb-8 font-poppins">{langData.formHeading}</h2>
                <div className="flex flex-col lg:flex-row gap-8 shadow-2xl rounded-2xl bg-white p-6 md:p-8">
                    
                    {/* Left Panel: Voice Input (FIX: justify-start to move content up) */}
                    <div className="flex-1 p-6 rounded-xl border border-gray-200 flex flex-col items-center justify-start text-center max-w-full lg:max-w-md">
                        {/* ... (Existing Voice Input Code) ... */}
                        <i className="fa-solid fa-microphone text-6xl text-green-500 mb-4"></i>
                        <h3 className="text-xl font-semibold text-green-600 mb-1">{langData.voiceInputTitle}</h3>
                        <p className="text-sm text-gray-500 mb-4">{langData.voiceInputSubtitle}</p>
                        
                        <select id="voice-language" className="p-2 border border-gray-300 rounded-lg w-full max-w-xs mb-4" value={currentLang} onChange={(e) => onLangChange(e.target.value)}>
                            {allLangCodes.map(lang => (<option key={lang} value={lang}>{languageMap[lang]}</option>))}
                        </select>
                        
                        <button id="voice-btn" className={`px-6 py-2 rounded-full font-bold text-white transition duration-300 w-full max-w-xs ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`} onClick={startVoiceRecording}>
                            <i className={`fa-solid ${isRecording ? 'fa-stop' : 'fa-microphone'} mr-2`}></i> {isRecording ? 'Stop Recording' : 'Start Recording'}
                        </button>
                        
                        <div id="voice-output" className="mt-4 p-3 bg-green-50 text-gray-700 rounded-lg min-h-12 w-full max-w-xs">{voiceOutput}</div>
                    </div>

                    {/* Right Panel: Form Fields */}
                    <div className="flex-1 p-6 rounded-xl border border-gray-200">
                        <div className="mb-4 flex items-center justify-between">
                            <label htmlFor="form-language" className="font-semibold text-gray-700 text-sm">Form Language:</label>
                            <select id="form-language" className="p-2 border border-gray-300 rounded-lg" value={currentLang} onChange={(e) => onLangChange(e.target.value)}>
                                {allLangCodes.map(lang => (<option key={lang} value={lang}>{languageMap[lang]}</option>))}
                            </select>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-green-600 mb-6">{langData.formDetailsHeading}</h3>
                        
                        <form onSubmit={handleSubmit} id="farm-form" className="space-y-4">
                            <FormInputs langData={langData} setFormData={setFormData} />

                            <button type="submit" className="w-full px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition duration-300 mt-6">{langData.submitBtn}</button>
                        </form>
                    </div>
                </div>

                {/* --- CHATBOT RESULT DISPLAY ANCHOR AND COMPONENT --- */}
                {showResults && (
                    <div id="chatbot-results-anchor">
                        <ChatbotResult langData={langData} />
                    </div>
                )}
            </div>
        </section>
    );
}

export default FormSection;
