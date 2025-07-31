import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const defaultTestimonials = [
  {
  name: "Esther Howard",
  feedback: "Amazing work! The website exceeded my expectations.",
  date: "June 18, 2021",
  rating: 5,
  },
  {
    name: "Amina Jamil",
    feedback: "Awesome! The product photography is really amazing..",
    date: "July 2, 2023",
    rating: 4,
  },
  {
    name: "Hanan Jamil",
    feedback: "Fire!! Their 3d ads are really appreciated..",
    date: "August 10, 2023",
    rating: 5,
  }
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-2">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 20 20"
      >
        <defs>
          <linearGradient id={`star-gradient-${star}`} x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a21caf" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
          fill={star <= rating ? `url(#star-gradient-${star})` : '#a1a1aa'}
        />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [form, setForm] = useState({ name: "", feedback: "", date: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      setError("");
      try {
        const BACKEND_URL = import.meta.env.PROD 
          ? "https://your-backend-url.com" // Replace with your actual backend URL
          : "http://localhost:5000";
          
        const res = await axios.get(`${BACKEND_URL}/testimonials`);
        if (res.data.length > 0) {
          setTestimonials(res.data);
        }
      } catch (err) {
        console.log("Using default testimonials");
        // Keep using defaultTestimonials if backend fails
      }
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (rating) => {
    setForm((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.feedback) {
      const today = new Date();
      const dateStr = today.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
      
      try {
        const BACKEND_URL = import.meta.env.PROD 
          ? "https://your-backend-url.com" // Will update this when we deploy backend
          : "http://localhost:5000";

        // Try to submit to backend
      try {
          const res = await axios.post(`${BACKEND_URL}/testimonials`, {
          ...form,
          date: dateStr,
        });
        setTestimonials([res.data, ...testimonials]);
        } catch (err) {
          // If backend fails, just add locally
          const newTestimonial = {
            ...form,
            date: dateStr,
          };
          setTestimonials([newTestimonial, ...testimonials]);
        }

        // Reset form and show success message
      setForm({ name: "", feedback: "", date: "", rating: 5 });
      setSubmitted(true);
      setDirection(1);
      setActiveIdx(0);
      setTimeout(() => setSubmitted(false), 2000);
      } catch (err) {
        setError("Failed to submit testimonial. Please try again later.");
        setTimeout(() => setError(""), 3000);
      }
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev + 1 < testimonials.length ? prev + 1 : prev));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  // Calculate average rating
  const averageRating = testimonials.length > 0 ? (testimonials.reduce((sum, t) => sum + (t.rating || 0), 0) / testimonials.length).toFixed(1) : 0;

  return (
    <div id="testimonials" className="flex-center section-padding min-h-[80vh] py-16 bg-black">
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
        <h2 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-700 bg-clip-text text-transparent drop-shadow-lg">
          Testimonials
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <span className="text-center text-gray-300">Total Reviews: <span className="font-bold text-white">{testimonials.length}</span></span>
          <span className="flex items-center gap-1 text-gray-300">
            <span>Average Rating:</span>
            <span className="font-bold text-white">{averageRating}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <defs>
                <linearGradient id="avg-star-gradient" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a21caf" />
                  <stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" fill="url(#avg-star-gradient)" />
            </svg>
          </span>
        </div>
        {error && <div className="text-red-400 text-center mb-2">{error}</div>}
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur rounded-lg p-6 mb-10 shadow flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded bg-white/30 text-gray-900 placeholder-white focus:outline-none"
            required
          />
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            placeholder="Your Feedback"
            className="p-3 rounded bg-white/30 text-gray-900 placeholder-white focus:outline-none"
            rows={4}
            required
          />
          <div className="flex items-center gap-2">
            <span className="text-white">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleRating(star)}
                className={`w-6 h-6 cursor-pointer ${star <= form.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold py-2 rounded shadow hover:from-fuchsia-500 hover:to-purple-500 transition"
          >
            Submit Feedback
          </button>
          {submitted && <p className="text-green-300 text-center mt-2">Thank you for your feedback!</p>}
        </form>
        <div className="relative flex flex-col items-center justify-center min-h-[320px]">
          {/* Testimonial Block with Animation */}
          <div className="w-full flex justify-center" style={{ position: 'relative', height: 300 }}>
            {loading ? (
              <div className="text-white text-center">Loading testimonials...</div>
            ) : (
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIdx}
                custom={direction}
                initial={{ x: direction === 1 ? 300 : -300, opacity: 0, position: 'absolute', width: '100%' }}
                animate={{ x: 0, opacity: 1, position: 'absolute', width: '100%' }}
                exit={{ x: direction === 1 ? -300 : 300, opacity: 0, position: 'absolute', width: '100%' }}
                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="relative rounded-lg shadow p-8 flex flex-col items-center w-full max-w-xl mx-auto overflow-hidden backdrop-blur-lg bg-white/10 border border-white/30"
                style={{ minHeight: '260px', boxShadow: '0 4px 32px 0 rgba(80, 0, 120, 0.10)' }}
              >
                {/* Gradient corners */}
                <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-transparent opacity-60 pointer-events-none z-10" />
                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-gradient-to-tl from-purple-400 to-transparent opacity-60 pointer-events-none z-10" />
                {/* Star Rating */}
                  <StarRating rating={testimonials[activeIdx]?.rating} />
                {/* No image */}
                  <h3 className="text-xl font-bold text-white mb-1 text-center">{testimonials[activeIdx]?.name}</h3>
                  <p className="text-sm text-gray-200 mb-4 text-center">{testimonials[activeIdx]?.date}</p>
                  <p className="text-lg text-white text-center font-medium mb-2">{testimonials[activeIdx]?.feedback}</p>
              </motion.div>
            </AnimatePresence>
            )}
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setDirection(idx < activeIdx ? -1 : 1); setActiveIdx(idx); }}
                className={`w-3 h-3 rounded-full ${idx === activeIdx ? 'bg-white' : 'bg-white/40'} border border-white transition cursor-pointer`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 