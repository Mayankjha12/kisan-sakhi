import React, { useState } from 'react';
import FormInputs from './FormInputs';
// NOTE: ChatbotResult is not imported here as its logic moves to App.js now.

// --- LANGUAGE MAP (Necessary for dropdowns) ---
const languageMap = {
    "en": "English", "hi": "Hindi", "pa": "Punjabi", "mr": "Marathi", "gu": "Gujarati", 
    "bn": "Bengali", "ta": "Tamil", "te": "Telugu", "kn": "Kannada", "ml": "Malayalam", 
    "or": "Odia", "as": "Assamese", "ur": "Urdu", "sd": "Sindhi", "sa": "Sanskrit", 
    "ks": "Kashmiri", "kok": "Konkani", "mai": "Maithili", "ne": "Nepali"
};
const allLangCodes = Object.keys(languageMap);
// --- END OF LANGUAGE MAP ---

// NOTE: We now receive onFormSubmitSuccess which is crucial
const FormSection = ({ langData, currentLang, onLangChange, onFormSubmitSuccess }) => {
    const [formData, setFormData] = useState({});
    const [voiceOutput, setVoiceOutput] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    
    const voiceLangCodes = { /* You need the full object here */ }; 

    // 1. Form Submission Logic (FIXED: Calls parent function instead of local state)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Save data to local storage (Finalized)
        const existingData = JSON.parse(localStorage.getItem('krishiSakhiData')) || [];
        const newFarmData = {
            id: Date.now(),
            dateSubmitted: new Date().toISOString(),
            ...formData
        };
        existingData.push(newFarmData);
        localStorage.setItem('krishiSakhiData', JSON.stringify(existingData));

        console.log("Data saved to Local Storage:", newFarmData);
        
        // --- THE FIX: Call the App.js function to change the page ---
        if (onFormSubmitSuccess) {
            onFormSubmitSuccess(); 
        }
    };

    // 2. Voice Input Logic (omitted for brevity, but needed in final code)
    const startVoiceRecording = () => { /* ... */ };
    
    return (
        <section id="form-section" className="py-12 flex justify-center bg-gray-100 min-h-screen">
            <div className="w-full max-w-6xl px-4">
                <h2 className="text-center text-4xl font-bold text-green-600 mb-8 font-poppins">{langData.formHeading}</h2>
                {/* ... (Flex Container and panels code remains the same) ... */}
                
                {/* The new dedicated result component will NOT be rendered here anymore */}
            </div>
        </section>
    );
}

export default FormSection;
