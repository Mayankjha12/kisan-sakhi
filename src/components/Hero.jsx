import React from 'react';

const Hero = ({ langData, onShowForm }) => {
    return (
        <section 
            className="hero relative flex items-center justify-start h-screen w-full bg-cover bg-center"
            style={{ 
                backgroundImage: "url('/Farmer-using-Phone.jpg')",
                height: '100vh'
            }}
        >
            {/* Desktop aur Mobile ke liye padding aur layout handling */}
            <div className="container mx-auto px-6 lg:px-20 h-full flex items-center">
                <div className="bg-gray-900/60 p-10 md:p-14 rounded-3xl text-white max-w-lg shadow-2xl text-center md:text-left backdrop-blur-sm">
                    
                    {/* Brand Title - translations.js se fetch kiya */}
                    <h2 className="font-poppins text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        {langData.heroTitle || 'KrishiSakhi'}
                    </h2>
                    
                    {/* Call to Action Button - transitions success par FormSection dikhayega */}
                    <button
                        id="show-form"
                        className="cta-button bg-green-600 text-white border-none rounded-full px-10 py-4 font-bold text-xl hover:bg-green-700 transition duration-300 shadow-lg hover:scale-105 active:scale-95 transform"
                        onClick={onShowForm}
                    >
                        {langData.heroBtn || 'Helping Farmers to build better'}
                    </button>
                </div>
            </div>
            
            {/* Scroll Indicator (Optional but looks professional) */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <i className="fa-solid fa-chevron-down text-white text-2xl opacity-50"></i>
            </div>
        </section>
    );
};

export default Hero;
