import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import HeroLights from "../components/HeroModels/HeroLights";
import emailjs from '@emailjs/browser';

function StudioModel() {
  const gltf = useGLTF("/models/studio_setup.glb");
  return (
    <primitive object={gltf.scene} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />
  );
}

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 2000);
    } catch (error) {
      setError("Failed to send message. Please try again later.");
      console.log('EMAILJS ERROR', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full min-h-[60vh] flex flex-col lg:flex-row items-center justify-center bg-black py-16 px-2 gap-8">
      {/* Left: Contact Form */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl rounded-xl shadow-2xl p-8 flex flex-col gap-4 border border-white/20 overflow-hidden">
        {/* Purple gradient corners */}
        <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/60 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-tl from-fuchsia-500/60 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-gradient-to-bl from-purple-400/40 to-transparent opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-gradient-to-tr from-fuchsia-400/40 to-transparent opacity-60 pointer-events-none" />
        
        <h2 className="text-3xl font-bold text-white mb-4 text-center relative z-10">Get in Touch – Let's Connect</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
          <label className="text-white">Your name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="w-full mt-1 p-3 rounded bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-white/10"
              required
              disabled={isSubmitting}
            />
          </label>
          <label className="text-white">Your Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="w-full mt-1 p-3 rounded bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-white/10"
              required
              disabled={isSubmitting}
            />
          </label>
          <label className="text-white">Your Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className="w-full mt-1 p-3 rounded bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-white/10"
              rows={4}
              required
              disabled={isSubmitting}
            />
          </label>
          <button
            type="submit"
            className="cta-wrapper w-full"
            disabled={isSubmitting}
          >
            <div className="cta-button group">
              <div className="bg-circle" />
              <p className="text">
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-pulse">SENDING</span>
                    <span className="ml-1 animate-bounce">.</span>
                    <span className="ml-0.5 animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
                    <span className="ml-0.5 animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                  </span>
                ) : (
                  "SEND MESSAGE"
                )}
              </p>
              <div className='arrow-wrapper'>
                <img src="/images/arrow-right.svg" alt="arrow" />
              </div>
            </div>
          </button>
          {submitted && <p className="text-green-300 text-center mt-2">Thank you for reaching out!</p>}
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </form>
      </div>
      {/* Right: Studio Image instead of 3D Model */}
      <div className="w-full max-w-xl h-[400px] bg-black rounded-xl flex items-center justify-center">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          {/* Purple shadow element behind the image */}
          <div className="absolute inset-0 bg-purple-500 rounded-xl transform scale-105 translate-y-2 opacity-60"></div>
          {/* Additional shadow element */}
          <div className="animate-pulse absolute inset-0 bg-purple-600 rounded-xl transform scale-110 translate-y-4 opacity-40"></div>
          <img 
            src="/images/studio.jpg" 
            alt="Studio Setup" 
            className="relative object-cover w-full h-full rounded-xl scale-110 transform z-10 border-4 border-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600" 
            style={{
              borderImage: 'linear-gradient(45deg, #a855f7, #d946ef, #a855f7) 1',
              borderWidth: '0px',
              borderStyle: 'solid',
              boxShadow: '0 10px 30px rgba(168, 85, 247, 0.6)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 