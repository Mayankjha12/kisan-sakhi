const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Farm = require('./models/Farm');

const app = express();

// Middlewares
app.use(cors()); // Iske bina frontend se data nahi aayega
app.use(express.json());

// API Route: Form Submit karne ke liye
app.post('/api/farms/submit', async (req, res) => {
    try {
        const farmData = new Farm(req.body);
        await farmData.save();
        res.status(201).json({ message: "Data MongoDB mein save ho gaya!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ KrishiSakhi DB Connected!"))
    .catch(err => console.log("❌ DB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
