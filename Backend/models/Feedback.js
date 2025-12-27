const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
    rating: Number,
    voiceFeedback: String, // Voice recording ka text
    writtenFeedback: String,
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Feedback', FeedbackSchema);
