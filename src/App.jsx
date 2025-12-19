import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import ChatbotResult from './components/ChatbotResult';
// Naye components import karein
import MyFarm from './components/MyFarm';
import ToDoList from './components/ToDoList';
import LocalTrend from './components/LocalTrend';
import Feedback from './components/Feedback';
import { translations } from './data/translations';

const supportedLangs = Object.keys(translations);

function App() {
    const [currentLang, setCurrentLang] = useState('en');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState('home'); 

    const handleLanguageChange = useCallback((newLang) => {
        if (supportedLangs.includes(newLang)) {
            setCurrentLang(newLang);
            document.documentElement.lang = newLang;
        }
    }, []);

    const navigateToResults = () => {
        setCurrentPage('results');
        setIsFormVisible(false);
    };

    const langData = translations[currentLang] || translations.en;

    // Is function se hum decide karenge ki screen par kya dikhega
    const renderPage = () => {
        switch(currentPage) {
            case 'my-farm': 
                return <MyFarm langData={langData} />;
            case 'todo': 
                return <ToDoList langData={langData} />;
            case 'trend': 
                return <LocalTrend langData={langData} />;
            case 'feedback': 
                return <Feedback langData={langData} />;
            case 'results': 
                return <ChatbotResult langData={langData} />;
            default: // Home Page logic
                return (
                    <>
                        <Hero 
                            langData={langData}
                            onShowForm={() => {
                                setIsFormVisible(true);
                                setTimeout(() => {
                                    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                        />
                        {isFormVisible && (
                            <FormSection 
                                langData={langData} 
                                currentLang={currentLang}
                                onLangChange={handleLanguageChange}
                                onFormSubmitSuccess={navigateToResults}
                            />
                        )}
                    </>
                );
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-lato text-gray-800">
            <Header 
                langData={langData} 
                currentLang={currentLang}
                onLangChange={handleLanguageChange}
                onNavigate={setCurrentPage} // Navigation handler pass kiya
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer langData={langData} />
        </div>
    );
}

export default App;
