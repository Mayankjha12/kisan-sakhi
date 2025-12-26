import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-gray-100 py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-4 tracking-wide">BrandName</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Delivering modern digital solutions with innovation, quality and trust.
            Transforming ideas into scalable success.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">Company</h3>
          <ul className="space-y-2 text-gray-100">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">Support</h3>
          <ul className="space-y-2 text-gray-100">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">Connect</h3>
          <div className="flex flex-col gap-2 text-gray-100">
            <a href="/" className="hover:text-white">Twitter</a>
            <a href="/" className="hover:text-white">LinkedIn</a>
            <a href="/" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto border-t border-green-300/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-100">
        <p>© {currentYear} BrandName Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0 text-gray-200">
          <a href="/" className="hover:text-white">Terms</a>
          <a href="/" className="hover:text-white">Privacy</a>
          <a href="/" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
