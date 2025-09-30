import React, { useState,useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import { translations } from './data/translations';

const supportedLangs = Object.keys(translations);

function App() {
    // Determine initial language from a combination of form and web dropdowns
    const initialLang = 'en'; // Start with 'en' unless you store user preference
    const [currentLang, setCurrentLang] = useState(initialLang);
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Function to handle language sync across the whole app
    const handleLanguageChange = useCallback((newLang) => {
        if (supportedLangs.includes(newLang)) {
            setCurrentLang(newLang);
            document.documentElement.lang = newLang;
        }
    }, []);

    // Get the UI text objects for the current language
    const langData = translations[currentLang] || translations.en;
    
    return (
        <div className="min-h-screen flex flex-col font-lato text-gray-800">
            <Header 
                langData={langData} 
                currentLang={currentLang}
                onLangChange={handleLanguageChange}
            />
            <main className="flex-grow">
                <Hero 
                    langData={langData}
                    onShowForm={() => {
                        setIsFormVisible(true);
                        // Optional: Scroll to the form after showing it
                        setTimeout(() => {
                            document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}
                />
                {isFormVisible && (
                    <FormSection 
                        langData={langData} 
                        currentLang={currentLang}
                        onLangChange={handleLanguageChange}
                    />
                )}
            </main>
            <Footer langData={langData} />
        </div>
    );
}

export default App;
