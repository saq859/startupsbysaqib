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
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923390003337?text=Hi%20Saqib!%20I%20want%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-green-500 via-green-400 to-fuchsia-500/80 text-white font-bold shadow-lg backdrop-blur-md border border-white/20 hover:scale-105 transition-all duration-300"
          style={{ boxShadow: '0 4px 24px 0 rgba(39, 174, 96, 0.15)' }}
        >
          {/* WhatsApp SVG Icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.31-1.66A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.1-1.39l-.36-.21-3.75.99 1-3.65-.23-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 5.01 4.27.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
          </svg>
          WhatsApp
        </a>
      </div>
      {/* Right: Studio Image instead of 3D Model */}
      <div className="w-full max-w-xl h-[400px] bg-black rounded-xl flex items-center justify-center">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
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