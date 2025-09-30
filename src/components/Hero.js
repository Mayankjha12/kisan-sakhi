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
            {/* Added styling classes for centering/sizing the box on desktop */}
            <div className="bg-gray-900/50 p-12 rounded-xl text-white max-w-md shadow-xl text-center mx-auto md:mx-0">
                
                {/* Logo text size increased for prominence */}
                <h2 className="font-poppins text-5xl font-bold mb-6">{langData.heroTitle}</h2>
                
                {/* Removed Subtitle and Date lines here */}
                
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
