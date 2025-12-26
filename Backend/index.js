const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Farm = require("./models/Farm");

const app = express();

/* ===============================
   ✅ MIDDLEWARES (ORDER MATTERS)
================================ */

// Allow Netlify frontend
app.use(
  cors({
    origin: "https://kisansakhiii.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Parse JSON body
app.use(express.json());

/* ===============================
   ✅ TEST ROUTE
================================ */
app.get("/", (req, res) => {
  res.send("✅ KrishiSakhi Backend is running");
});

/* ===============================
   ✅ API ROUTE: FORM SUBMIT
================================ */
app.post("/api/farms/submit", async (req, res) => {
  try {
    console.log("📩 Data Received:", req.body);

    const farmData = new Farm(req.body);
    await farmData.save();

    res.status(201).json({
      success: true,
      message: "🌾 Data MongoDB mein save ho gaya!",
    });
  } catch (err) {
    console.error("❌ Save Error:", err);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

/* ===============================
   ✅ MONGODB CONNECTION
================================ */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ KrishiSakhi DB Connected!"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

/* ===============================
   ✅ SERVER START
================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
