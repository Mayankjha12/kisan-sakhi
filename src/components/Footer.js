import React from 'react';

const Footer = ({ langData }) => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8 mt-12 border-t border-gray-200">
            <div className="footer-content max-w-7xl mx-auto flex flex-col items-center gap-4 px-4">
                
                <div className="footer-logo text-xl text-green-600 font-bold flex items-center gap-1">
                    <i className="fa-solid fa-leaf"></i> 
                    <span>{langData.footerLogo || 'AgroKheti'}</span>
                </div>
                
                
                
                <div className="footer-social flex gap-4 text-xl">
                    <a href="/"><i className="fa-brands fa-facebook text-green-600 hover:text-green-700"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter text-green-600 hover:text-green-700"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram text-green-600 hover:text-green-700"></i></a>
                </div>
                
                <div className="footer-copy text-xs text-gray-500 mt-2">
                    {langData.footerCopy || '© 2025 AgroKheti. All rights reserved.'}
                </div>
            </div>
        </footer>
    );
};
export default Footer;
