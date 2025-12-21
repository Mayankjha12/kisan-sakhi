import React from 'react';

const Footer = ({ langData }) => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-10 mt-12 border-t border-gray-200">
            <div className="footer-content max-w-7xl mx-auto flex flex-col items-center gap-6 px-4">
                
                {/* Logo Section - Name updated to KrishiSakhi */}
                <div className="footer-logo text-2xl text-green-600 font-bold flex items-center gap-2">
                    <i className="fa-solid fa-leaf"></i> 
                    <span>{langData.heroTitle || 'KrishiSakhi'}</span>
                </div>
                
               
                
                {/* Social Icons */}
                <div className="footer-social flex gap-6 text-2xl">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                        <i className="fa-brands fa-facebook"></i>
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors">
                        <i className="fa-brands fa-twitter"></i>
                    </button>
                    <button className="text-gray-400 hover:text-pink-600 transition-colors">
                        <i className="fa-brands fa-instagram"></i>
                    </button>
                </div>
                
                {/* Copyright Text */}
                <div className="footer-copy text-[10px] uppercase tracking-widest text-gray-400 mt-4">
                    {langData.footerCopy || '© 2025 KrishiSakhi. All rights reserved.'}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
