const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://AminaJamil:amnaXYZ789@cluster0.bwyjazj.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  date: String,
  rating: Number,
  approved: { type: Boolean, default: true },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// Get all testimonials (no approval filter)
app.get('/testimonials', async (req, res) => {
  const testimonials = await Testimonial.find().sort({ _id: -1 });
  res.json(testimonials);
});

// Add a new testimonial (approved by default)
app.post('/testimonials', async (req, res) => {
  const { name, feedback, date, rating } = req.body;
  const testimonial = new Testimonial({ name, feedback, date, rating, approved: true });
  await testimonial.save();
  res.status(201).json(testimonial);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
