const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const Farm = require("./models/Farm");
const Feedback = require("./models/Feedback");

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- 1. Chatbot Logic (Gemini Trained) ---
app.post("/api/ai/chat", async (req, res) => {
    try {
        const { prompt, farmData } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const context = `You are KrishiSakhi AI. Context: Farmer has ${farmData.crop} in ${farmData.location} with ${farmData.soilType} soil. Current issue: ${farmData.currentProblem}. Give expert advice in simple terms.`;
        
        const result = await model.generateContent(`${context} User asks: ${prompt}`);
        const response = await result.response;
        res.json({ reply: response.text() });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- 2. Farm Submit ---
app.post("/api/farms/submit", async (req, res) => {
    try {
        const farm = new Farm(req.body);
        await farm.save();
        res.status(201).json({ success: true, message: "Farm data saved!", data: farm });
    } catch (err) { res.status(400).json({ error: err.message }); }
});

// --- 3. Feedback Submit ---
app.post("/api/feedback", async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.json({ success: true, message: "Dhanyawad! Feedback save ho gaya." });
    } catch (err) { res.status(400).json({ error: err.message }); }
});

mongoose.connect(process.env.MONGO_URI).then(() => console.log("✅ MongoDB & Gemini Ready"));
app.listen(5001, () => console.log("🚀 Server running on 5001"));

