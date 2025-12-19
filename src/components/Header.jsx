import React from 'react';

const languageMap = {
    "en": "English", "hi": "Hindi", "pa": "Punjabi", "mr": "Marathi", "gu": "Gujarati", 
    "bn": "Bengali", "ta": "Tamil", "te": "Telugu", "kn": "Kannada", "ml": "Malayalam", 
    "or": "Odia", "as": "Assamese", "ur": "Urdu", "sd": "Sindhi", "sa": "Sanskrit", 
    "ks": "Kashmiri", "kok": "Konkani", "mai": "Maithili", "ne": "Nepali"
};

const allLangCodes = Object.keys(languageMap);

// FIX: onNavigate prop ko yahan receive karna hai
const Header = ({ langData, currentLang, onLangChange, onNavigate, currentPage }) => {
    
    // Helper function to handle clicks without page reload
    const handleNavClick = (e, page) => {
        e.preventDefault();
        onNavigate(page);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10 w-full">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-8 py-4 flex-wrap">
                {/* Logo click se home par wapas */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
                    <i className="fa-solid fa-leaf text-green-600 text-xl"></i>
                    <h1 className="font-poppins text-lg font-medium text-green-600">KrishiSakhi</h1>
                </div>

                <ul className="nav-menu hidden lg:flex list-none gap-8">
                    {/* Har link ab onNavigate ko trigger karega */}
                    <li>
                        <button 
                            onClick={(e) => handleNavClick(e, 'home')} 
                            className={`text-gray-700 hover:text-green-600 ${currentPage === 'home' ? 'border-b-2 border-green-600 font-bold' : ''} pb-1.5 transition-all`}
                        >
                            {langData.home}
                        </button>
                    </li>
                    <li>
                        <button onClick={(e) => handleNavClick(e, 'my-farm')} className="text-gray-700 hover:text-green-600">{langData.myFarm}</button>
                    </li>
                    <li>
                        <button onClick={(e) => handleNavClick(e, 'todo')} className="text-gray-700 hover:text-green-600">{langData.todo}</button>
                    </li>
                    <li>
                        <button onClick={(e) => handleNavClick(e, 'trend')} className="text-gray-700 hover:text-green-600">{langData.trend}</button>
                    </li>
                    <li>
                        <button onClick={(e) => handleNavClick(e, 'feedback')} className="text-gray-700 hover:text-green-600">{langData.feedback}</button>
                    </li>
                </ul>

                <div className="nav-right flex items-center gap-4">
                    {/* Search bar codes remained same */}
                    <div className="search-container relative hidden sm:block">
                        <input 
                            type="text" 
                            placeholder={langData.search} 
                            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-green-600 w-40"
                        />
                        <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    </div>

                    <div className="web-lang-select flex items-center gap-2">
                        <label htmlFor="web-language" className="font-semibold text-gray-700 text-sm">{langData.websiteLanguage}</label>
                        <select 
                            id="web-language" 
                            className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-green-600"
                            value={currentLang}
                            onChange={(e) => onLangChange(e.target.value)}
                        >
                            {allLangCodes.map(lang => (
                                <option key={lang} value={lang}>{languageMap[lang]}</option>
                            ))}
                        </select>
                    </div>

                    <button className="accessibility-icon" aria-label="Accessibility Options">
                        <i className="fa-solid fa-universal-access text-xl text-gray-700 hover:text-green-600"></i>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
