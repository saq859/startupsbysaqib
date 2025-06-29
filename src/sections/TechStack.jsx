import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const projects = [
  {
    title: "Product Photography for Bahaar Scentiments",
    description: "We shot high-quality product photos for Bahaar Scentiments, a renowned perfume brand, capturing the essence and elegance of their fragrances.",
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    title: "Website for Glasses: eternityaustraliaoptical.com",
    description: "Developed a modern, user-friendly website for an Australian client, showcasing a wide range of glasses and optical products at eternityaustraliaoptical.com.",
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    title: "3D Perfume Ads & Custom Backgrounds",
    description: "Created engaging 3D advertisements for perfumes, designing and setting backgrounds that perfectly match and enhance each fragrance's identity.",
    imgPath: "/images/blender.png",
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent drop-shadow-lg">
          Projects
        </h2>
        <p className="text-lg text-gray-300 mb-8 text-center">Here are some of the projects I've worked on recently:</p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-lg shadow p-6 flex flex-col items-center overflow-hidden"
              style={{
                backgroundImage: `url(${project.imgPath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '260px',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 backdrop-blur-lg bg-black/60 border border-white/30 z-0" />
              {/* Gradient corners */}
              <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-transparent opacity-60 pointer-events-none z-10" />
              <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-gradient-to-tl from-purple-400 to-transparent opacity-60 pointer-events-none z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
                <h3 className="text-xl font-semibold mb-2 text-white drop-shadow text-center">{project.title}</h3>
                <p className="text-gray-200 text-center drop-shadow">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
