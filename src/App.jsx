import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import ChatbotResult from './components/ChatbotResult'; // Make sure this file exists
import { translations } from './data/translations';

const supportedLangs = Object.keys(translations);

function App() {
    const initialLang = 'en'; 
    const [currentLang, setCurrentLang] = useState(initialLang);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'results'

    const handleLanguageChange = useCallback((newLang) => {
        if (supportedLangs.includes(newLang)) {
            setCurrentLang(newLang);
            document.documentElement.lang = newLang;
        }
    }, []);
    
    // FUNCTION: Instantly changes the page view
    const navigateToResults = () => {
        setCurrentPage('results');
        setIsFormVisible(false);
    };

    const langData = translations[currentLang] || translations.en;

    const renderPage = () => {
        if (currentPage === 'results') {
            return <ChatbotResult langData={langData} />; // SHOWS FULL PAGE CHATBOT
        }
        return (
            <>
                <Hero 
                    langData={langData}
                    onShowForm={() => {
                        setIsFormVisible(true);
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
                        onFormSubmitSuccess={navigateToResults} // PASS THE HANDLER
                    />
                )}
            </>
        );
    };
    
    return (
        <div className="min-h-screen flex flex-col font-lato text-gray-800">
            <Header 
                langData={langData} 
                currentLang={currentLang}
                onLangChange={handleLanguageChange}
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer langData={langData} />
        </div>
    );
}

export default App;
