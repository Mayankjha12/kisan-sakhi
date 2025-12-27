const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const Farm = require("./models/Farm");

const app = express();
app.use(cors());
app.use(express.json());

// Gemini Config (Teri key use kar raha hoon)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- 1. Chatbot API (Gemini Trained on Farm Data) ---
app.post("/api/ai/chat", async (req, res) => {
    try {
        const { prompt, farmData } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        // AI ko train karne ke liye context
        const context = `You are KrishiSakhi AI. A farmer from ${farmData.location} with ${farmData.landSize} land is asking for help. 
        Crop: ${farmData.crop}, Soil: ${farmData.soilType}, Stage: ${farmData.cropStage}. 
        Current Issue: ${farmData.currentProblem}. Give expert, short, and helpful advice.`;
        
        const result = await model.generateContent(`${context} \nFarmer says: ${prompt}`);
        const response = await result.response;
        res.json({ reply: response.text() });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- 2. Farm Form Submit ---
app.post("/api/farms/submit", async (req, res) => {
    try {
        const farm = new Farm(req.body); // Tere Farm.js model ka use
        await farm.save();
        res.status(201).json({ success: true, message: "Data saved!", data: farm });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Backend, DB & Gemini API Linked"))
    .catch(err => console.error(err));

app.listen(5001, () => console.log("🚀 Server running on 5001"));
