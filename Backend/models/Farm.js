const mongoose = require('mongoose');

const FarmSchema = new mongoose.Schema({
    location: { type: String, required: true },
    landSize: String,
    crop: String,
    soilType: String,
    soilCharacter: String,
    irrigationSource: String,
    sowingType: String,
    sowingDate: Date,
    cropStage: String,
    currentProblem: String,
    voiceTranscript: String, // Jo voice se record hua
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Farm', FarmSchema);
