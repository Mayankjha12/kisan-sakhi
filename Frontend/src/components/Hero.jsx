// Hero.jsx
import React from "react";

const Hero = ({ langData, onShowForm }) => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/Farmer-using-Phone.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
        <div
          className="
            bg-gradient-to-br from-white/20 to-white/5
            backdrop-blur-xl
            border border-white/30
            p-14 rounded-3xl
            text-white max-w-xl
            shadow-[0_30px_70px_rgba(0,0,0,0.5)]
            animate-[fadeUp_1s_ease-out]
          "
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-wide scroll-mt-20">
            {langData.heroTitle || "KrishiSakhi"}
          </h2>

          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
            Empowering farmers with smart tools, local language support,
            and real-time agricultural insights.
          </p>

          <button
            className="
              bg-green-600 px-12 py-4 rounded-full
              text-xl font-bold
              shadow-xl
              hover:bg-green-700
              transition-all duration-300
              hover:scale-105
              hover:shadow-green-500/50
              active:scale-95
            "
            onClick={onShowForm}
          >
            {langData.heroBtn || "Helping Farmers Build Better"}
          </button>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fa-solid fa-chevron-down text-white opacity-70 text-xl"></i>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
