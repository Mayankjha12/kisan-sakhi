import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ActionAreaCard from './card_Feed';


const Feedback = ({ langData }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10 bg-gray-50/30 min-h-screen font-lato">

      {/* Page Header with Badge */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold border border-green-100 mx-auto">
          <i className="fa-regular fa-comment-dots"></i>
          <span>We Value Your Input</span>
        </div>
        <h2 className="text-4xl font-black text-gray-800">Share Your Recent Crop Feedback</h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm">
          Help us improve KrishiSakhi for farmers like you. Your feedback helps us train our AI models better.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">

        {/* Card 1: Star Rating */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm text-center space-y-6">
          <h4 className="font-bold text-gray-800 text-lg tracking-tight">Rate Your Crop Experience</h4>
          <div className="flex justify-center gap-4 text-4xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`transition-all transform hover:scale-110 active:scale-95 ${star <= rating ? 'text-yellow-400' : 'text-gray-200'
                  }`}
              >
                <i className="fa-solid fa-star"></i>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-medium">Tap to rate</p>
        </div>


        {/* Card for feedback of previous crops */}
        <h2 style={{
          fontSize: '2rem',
          color: '#000',
          marginBottom: '10px'
        }}>
          <br></br>
          Feedbacks about previous Crops
        </h2>

        <Box
          sx={{
            margin: '0 auto',
            padding: '0',
            width: '100%',
            maxWidth: '1200px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            justifyContent: 'center'
          }}
        >
          <ActionAreaCard title="Paddy" url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQddur2XKt9TVxN3g7IRKz-vj_GMisUDf3A&s"} description={"After following the monsoon schedule and fertilizer tips on KrishiSakhi, my paddy yield increased by 25% this year. The 'My Farm' feature kept me organized throughout the season."} name={"— Rajesh Kumar, Punjab"} />


          <ActionAreaCard title="Wheat" url={"https://cdn.britannica.com/18/122518-050-A0740F9F/Field-durum-wheat.jpg"} description={"I was always confused about the right time for the first irrigation of my wheat crop.The local trends on this site gave me the exact data I needed. My grains are healthier and heavier than last season"} name={"— Suresh Singh, Uttar Pradesh"} />

          <ActionAreaCard title="Maize" url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TmRTwyo1lVOyMz4Y-ZDMHWLEPafDpcl0Rg&s"} description={"The pest control alerts for Maize saved my entire field from seasonly pests. KrishiSakhi chatbot is truly a friend to the farmer"} name={"— Anil Meena, Madhya Pradesh"} />
        </Box>


        {/* Card 2: Voice Feedback */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm text-center space-y-6">
          <h4 className="font-bold text-gray-800 text-lg tracking-tight text-left">Voice Feedback</h4>
          <div className="flex flex-col items-center gap-4 border-2 border-dashed border-gray-100 rounded-3xl py-10 px-6">
            <button className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl shadow-xl shadow-green-100 hover:bg-green-700 transition transform active:scale-90">
              <i className="fa-solid fa-microphone"></i>
            </button>
            <div className="space-y-1">
              <p className="font-bold text-green-600 text-lg">Record Feedback</p>
              <p className="text-xs text-gray-400 font-medium italic">Speak in your language</p>
            </div>
          </div>
        </div>

        {/* Card 3: Written Feedback */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm space-y-6">
          <h4 className="font-bold text-gray-800 text-lg tracking-tight">Written Feedback</h4>
          <textarea

            className="w-full h-40 bg-gray-50 border border-gray-100 rounded-3xl p-6 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all resize-none shadow-inner"
            placeholder="Tell us how we can improve..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-green-600 text-white py-5 rounded-[1.5rem] font-black text-xl shadow-2xl shadow-green-200 hover:bg-green-700 transition flex items-center justify-center gap-3 active:scale-[0.98] transform">
          <i className="fa-solid fa-paper-plane text-sm opacity-80"></i>
          <span>Submit Feedback</span>
        </button>

      </div>

      {/* Trust Quote Footer (Optional) */}
      <div className="text-center pt-6 opacity-40">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          Powered by Federated Learning & NGO Partnerships
        </p>
      </div>

    </div>
  );
};

export default Feedback;
