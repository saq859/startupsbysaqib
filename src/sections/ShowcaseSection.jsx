import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
              From concept to code — we create websites that work beautifully and convert effectively
              </h2>
              <p className="text-white-50 md:text-xl">
              Smart, scalable websites designed to grow with your business
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6" ref={libraryRef}>
              <div className="image-wrapper">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Shoot sharp. Sell smart</h2>
            </div>

            <div className="project bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6" ref={ycDirectoryRef}>
              <div className="image-wrapper">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Bring ideas to life in 3D</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;


