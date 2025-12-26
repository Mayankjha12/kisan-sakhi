import React, { useState } from 'react';
import axios from 'axios'; // Naya change: Backend se connect karne ke liye
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
    
    const voiceLangCodes = {
        'en': 'en-IN', 'hi': 'hi-IN', 'pa': 'pa-IN', 'mr': 'mr-IN', 'gu': 'gu-IN', 'bn': 'bn-IN', 'ta': 'ta-IN', 'te': 'te-IN',
        'kn': 'kn-IN', 'ml': 'ml-IN', 'or': 'or-IN', 'as': 'as-IN', 'ur': 'ur-IN', 'sd': 'sd-IN', 'sa': 'sa-IN', 'ks': 'ks-IN',
        'kok': 'kok-IN', 'mai': 'mai-IN', 'ne': 'ne-IN'
    };

    // CHANGE: Ab ye data MongoDB mein save hoga
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Data ko backend API par bhej rahe hain
            const response = await axios.post('http://localhost:5000/api/farms/submit', {
                ...formData,
                voiceTranscript: voiceOutput, // Voice text bhi backend jayega
                dateSubmitted: new Date().toISOString()
            });

            console.log("Success:", response.data);
            alert("Kisan bhai, aapka data MongoDB mein save ho gaya!");

            // Local storage backup (Optional)
            const existingData = JSON.parse(localStorage.getItem('krishiSakhiData')) || [];
            existingData.push(response.data);
            localStorage.setItem('krishiSakhiData', JSON.stringify(existingData));

            // Result page par navigate karein
            if (onFormSubmitSuccess) {
                onFormSubmitSuccess();
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Maaf kijiye, server connect nahi ho paya. Backend chalu hai?");
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
            
            // Sync voice output with formData
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
        <section id="form-section" className="py-12 flex justify-center bg-gray-50 min-h-screen">
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
                        
                        <select 
                            className="p-3 border border-gray-200 rounded-xl w-full mb-4 shadow-sm bg-white outline-none focus:ring-2 focus:ring-green-500" 
                            value={currentLang} 
                            onChange={(e) => onLangChange(e.target.value)}
                        >
                            {allLangCodes.map(lang => (<option key={lang} value={lang}>{languageMap[lang]}</option>))}
                        </select>
                        
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
                        <div className="mb-6 flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                            <span className="font-semibold text-gray-600 text-sm">Form Language</span>
                            <select 
                                className="p-1.5 border-none bg-transparent font-bold text-green-600 outline-none" 
                                value={currentLang} 
                                onChange={(e) => onLangChange(e.target.value)}
                            >
                                {allLangCodes.map(lang => (<option key={lang} value={lang}>{languageMap[lang]}</option>))}
                            </select>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                            <i className="fa-solid fa-file-invoice text-green-600"></i>
                            {langData.formDetailsHeading}
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <FormInputs langData={langData} setFormData={setFormData} />
                            
                            <button 
                                type="submit" 
                                className="w-full px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-200 mt-4 text-lg"
                            >
                                {langData.submitBtn}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;
