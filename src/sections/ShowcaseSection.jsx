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
          <div className="project-list-wrapper w-full flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
            <div className="project flex-1 min-w-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-0 flex flex-col min-h-[320px]" ref={libraryRef}>
              <div className="w-full aspect-[16/9] min-h-[180px] md:min-h-[220px] overflow-hidden rounded-t-xl">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-end p-6">
                <h2 className="text-white text-xl font-semibold break-words">Shoot sharp. Sell smart</h2>
              </div>
            </div>

            <div className="project flex-1 min-w-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-0 flex flex-col min-h-[320px]" ref={ycDirectoryRef}>
              <div className="w-full aspect-[16/9] min-h-[180px] md:min-h-[220px] overflow-hidden rounded-t-xl">
                <img src="/images/project3.png" alt="YC Directory App" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-end p-6">
                <h2 className="text-white text-xl font-semibold break-words">Bring ideas to life in 3D</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;


