import React from 'react';

// List of all 20 language codes based on your index.html
const allLangCodes = [
    "en", "hi", "pa", "mr", "gu", "bn", "ta", "te", "kn", "ml", "or", "as", "ur", "sd", "sa", "ks", "kok", "mai", "ne"
];

const Header = ({ langData, currentLang, onLangChange }) => {
    // Note: The mobile nav toggle (hamburger menu) needs a separate JS/State component if you want it to appear/disappear.
    // The current CSS makes the nav-menu disappear on mobile.

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10 w-full">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-8 py-4 flex-wrap">
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-leaf text-green-600 text-xl"></i>
                    <h1 className="font-poppins text-lg font-medium text-green-600">AgroKheti</h1>
                </div>

                <ul className="nav-menu hidden lg:flex list-none gap-8">
                    <li><a href="#" className="text-gray-700 hover:text-green-600 border-b-2 border-green-600 font-bold pb-1.5">{langData.home}</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-600">{langData.myFarm}</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-600">{langData.todo}</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-600">{langData.trend}</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-600">{langData.feedback}</a></li>
                </ul>

                <div className="nav-right flex items-center gap-4">
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
                                <option key={lang} value={lang}>{lang.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>

                    <a href="#" className="accessibility-icon" aria-label="Accessibility Options">
                        <i className="fa-solid fa-universal-access text-xl text-gray-700 hover:text-green-600"></i>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;