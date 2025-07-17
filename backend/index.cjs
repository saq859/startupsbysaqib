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
  authorEmail: String, // NEW FIELD
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// Get all testimonials (no approval filter)
app.get('/testimonials', async (req, res) => {
  const testimonials = await Testimonial.find().sort({ _id: -1 });
  res.json(testimonials);
});

// Add a new testimonial (approved by default)
app.post('/testimonials', async (req, res) => {
  const { name, feedback, date, rating, authorEmail } = req.body;
  const testimonial = new Testimonial({ name, feedback, date, rating, approved: true, authorEmail });
  await testimonial.save();
  res.status(201).json(testimonial);
});

app.delete('/testimonials/:id', async (req, res) => {
  const { authorEmail } = req.body; // frontend se bhejna hoga
  const testimonial = await Testimonial.findById(req.params.id);

  if (!testimonial) {
    return res.status(404).json({ error: 'Testimonial not found' });
  }

  if (testimonial.authorEmail !== authorEmail) {
    return res.status(403).json({ error: 'You can only delete your own testimonial' });
  }

  await testimonial.deleteOne();
  res.json({ message: 'Testimonial deleted' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
