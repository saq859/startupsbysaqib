const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: ['https://startupsbysaqib.com', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// MongoDB connection with error handling
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://AminaJamil:amnaXYZ789@cluster0.bwyjazj.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  date: String,
  rating: Number,
  approved: { type: Boolean, default: true },
  authorEmail: String,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

// Get all testimonials
app.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ _id: -1 }); // Fetch from MongoDB
    res.json(testimonials);
  } catch (err) {
    console.error('Error fetching testimonials:', err);
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
});

// Add a new testimonial
app.post('/testimonials', async (req, res) => {
  try {
    console.log('Received data:', req.body); // Log incoming data
    const { name, feedback, date, rating, authorEmail } = req.body;
    const testimonial = new Testimonial({ 
      name, 
      feedback, 
      date, 
      rating, 
      approved: true, 
      authorEmail 
    });
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    console.error('Error adding testimonial:', err);
    res.status(500).json({ error: 'Failed to add testimonial' });
  }
});

// Delete a testimonial
app.delete('/testimonials/:id', async (req, res) => {
  try {
    const { authorEmail } = req.body;
  const testimonial = await Testimonial.findById(req.params.id);

  if (!testimonial) {
    return res.status(404).json({ error: 'Testimonial not found' });
  }

  if (testimonial.authorEmail !== authorEmail) {
    return res.status(403).json({ error: 'You can only delete your own testimonial' });
  }

  await testimonial.deleteOne();
  res.json({ message: 'Testimonial deleted' });
  } catch (err) {
    console.error('Error deleting testimonial:', err);
    res.status(500).json({ error: 'Failed to delete testimonial' });
  }
});

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const count = await Testimonial.countDocuments();
    res.json({ message: `Database is connected. Total testimonials: ${count}` });
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Example testimonial data
const exampleTestimonial = {
  name: "John Doe",
  feedback: "Great service!",
  date: "2023-10-01",
  rating: 5,
  approved: true,
  authorEmail: "john.doe@example.com"
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
