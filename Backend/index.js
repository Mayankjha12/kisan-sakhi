const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const Farm = require("./models/Farm");

const app = express();
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Backend is alive ✅");
});

// API
app.post("/api/farms/submit", async (req, res) => {
  try {
    const farm = new Farm(req.body);
    await farm.save();

    res.json({
      success: true,
      message: "Farm data saved",
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

// DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

app.listen(5001, () => {
  console.log("Backend running on 5001");
});

