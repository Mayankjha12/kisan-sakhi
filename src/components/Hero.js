import React from 'react';

const Hero = ({ langData, onShowForm }) => {
    return (
        <section 
            className="hero flex items-center justify-start h-screen w-full bg-cover bg-center"
            style={{ 
                backgroundImage: "url('/Farmer-using-Phone.jpg')",
                height: '100vh', 
                paddingLeft: '8%',
                paddingRight: '0' 
            }}
        >
            <div className="bg-gray-900/50 p-12 rounded-xl text-white max-w-2xl shadow-xl text-center">
                <h2 className="font-poppins text-4xl font-bold mb-4">{langData.heroTitle}</h2>
                
                {/* Adding subtitle and date for completeness, using the same text content from your original plan */}
                <p className="text-lg text-green-300 opacity-90 mb-1">{langData.heroSubtitle}</p>
                <p className="text-base text-gray-400 mb-6">{langData.heroDate}</p>

                <button
                    id="show-form"
                    className="cta-button bg-green-600 text-white border-none rounded-full px-8 py-3 font-bold text-lg hover:bg-green-700 transition duration-300 shadow-md"
                    onClick={onShowForm}
                >
                    {langData.heroBtn}
                </button>
            </div>
        </section>
    );
};

export default Hero;