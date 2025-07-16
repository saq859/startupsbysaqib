import React, { useState } from 'react';

// Dummy data for stories
const storiesData = [
  {
    name: 'Photoshoot',
    icon: '/photoshoot/P1.jpg', // Replace with your own
    stories: [
      { type: 'image', url: '/photoshoot/P1.jpg' },
      { type: 'image', url: '/photoshoot/P2.jpg' },
      { type: 'image', url: '/photoshoot/P3.jpg' },
      { type: 'image', url: '/photoshoot/P4.jpg' },
      { type: 'image', url: '/photoshoot/P5.jpg' },
      { type: 'image', url: '/photoshoot/P6.jpg' },
      { type: 'image', url: '/photoshoot/P7.jpg' },
      { type: 'image', url: '/photoshoot/P8.jpg' },
      { type: 'image', url: '/photoshoot/P9.jpg' },
      { type: 'image', url: '/photoshoot/P10.jpg' },
      { type: 'image', url: '/photoshoot/P11.jpg' },
    ],
  },
  {
    name: '3D Ads',
    icon: '/images/blender.png',
    stories: [
      { type: 'video', url: '/videos/3d.mp4' },
    //   { type: 'image', url: '/images/exp3.png' },
    //   { type: 'video', url: '/images/screen.mp4' }, // Example video story
    ],
  },
  {
    name: 'Websites',
    icon: '/images/project1.png',
    stories: [
      { type: 'image', url: '/websites/W1.png', link: 'https://eternityaustraliaoptical.com/' },
      { type: 'image', url: '/websites/W2.png', link: 'https://www.bahaarscentiments.com/' },
      { type: 'image', url: '/websites/W3.png', link: 'https://www.purescentspk.com/' },
    ],
  },
  {
    name: 'Amazon Listing',
    icon: '/amazon/A1.jpg',
    stories: [
      { type: 'image', url: '/amazon/A1.jpg' },
      { type: 'image', url: '/amazon/A2.jpg' },
      { type: 'image', url: '/amazon/A3.jpg' },
    ],
  },
  {
    name: 'Pr Collabs',
    icon: '/images/sa.png',
    stories: [
      { type: 'video', url: '/ugc/UGC1.mp4' },
      { type: 'video', url: '/ugc/UGC2.mp4' },
     
      { type: 'video', url: '/ugc/UGC3.mp4' },
    ],
  },
  {
    name: 'Transitional Ad',
    icon: '/images/Tr.png', // placeholder icon, change as needed
    stories: [
      { type: 'video', url: '/videos/Transitional ad.mp4' },
    ],
  },
  {
    name: 'Voiceover Ad',
    icon: '/images/Vo.png', // placeholder icon, change as needed
    stories: [
      { type: 'video', url: '/videos/voiceover ad.mp4' }, // placeholder story
    ],
  },
  {
    name: 'Customize Ads',
    icon: '/images/Cu.png', // placeholder icon, change as needed
    stories: [
      { type: 'video', url: '/videos/customize ad.mp4' }, // placeholder story
  
    ],
  },
  {
    name: 'Bannerz',
    icon: '/images/Ba.png', // placeholder icon, change as needed
    stories: [
      { type: 'image', url: '/images/Banner 1.png' }, // placeholder story
      { type: 'image', url: '/images/Banner 2.png' },
      { type: 'image', url: '/images/Banner 3.png' },
    ],
  },
];

const StoriesBar = () => {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const openStories = (categoryIdx) => {
    setActiveCategory(categoryIdx);
    setActiveStoryIdx(0);
    setOpen(true);
  };

  const closeStories = () => {
    setOpen(false);
    setActiveCategory(null);
    setActiveStoryIdx(0);
  };

  const nextStory = () => {
    if (activeCategory === null) return;
    const stories = storiesData[activeCategory].stories;
    if (activeStoryIdx < stories.length - 1) {
      setActiveStoryIdx(activeStoryIdx + 1);
    } else {
      closeStories();
    }
  };

  const prevStory = () => {
    if (activeCategory === null) return;
    if (activeStoryIdx > 0) {
      setActiveStoryIdx(activeStoryIdx - 1);
    }
  };

  return (
    <div id="work" className="w-full flex flex-col items-center mb-16 scroll-mt-24 px-2 mt-8 md:mt-12">
      {/* Stories Bar with glassmorphism and gradient corners */}
      <div className="w-full flex justify-center">
        <div className="relative flex flex-col gap-2 items-center w-full sm:rounded-2xl rounded-none bg-white/10 backdrop-blur-md border border-white/20 shadow-lg py-6 overflow-x-visible">
          {/* Purple gradient corners */}
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/60 to-transparent opacity-70 pointer-events-none z-10" />
          <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-gradient-to-tl from-fuchsia-500/60 to-transparent opacity-70 pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-12 h-12 rounded-full bg-gradient-to-bl from-purple-400/40 to-transparent opacity-60 pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-gradient-to-tr from-fuchsia-400/40 to-transparent opacity-60 pointer-events-none z-10" />
          {/* Heading inside block */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2 text-white drop-shadow-lg leading-tight">Our Work</h2>
          {/* Tagline with icon */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 w-full justify-center">
            <svg className="w-7 h-7 sm:w-6 sm:h-6 text-purple-400 mb-1 sm:mb-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h1a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v7a2 2 0 002 2h1" /></svg>
            <span className="text-white text-sm sm:text-base md:text-lg font-medium opacity-80 text-center">Explore our creative journey — photoshoots, 3D ads, websites & more!</span>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-y-4 gap-x-2 justify-items-center items-center w-full pb-2 pt-1 px-0 sm:flex sm:gap-8 sm:justify-center sm:items-center sm:overflow-x-auto sm:max-w-full sm:scrollbar-hide sm:pb-2 sm:pt-1 sm:px-4 sm:min-w-0 sm:snap-x sm:snap-mandatory sm:-mx-0">
            {storiesData.map((cat, idx) => (
              <button
                key={cat.name}
                className="flex flex-col items-center focus:outline-none cursor-pointer group w-14 sm:w-24 flex-shrink-0 sm:snap-center"
                onClick={() => openStories(idx)}
                style={{ minWidth: '0' }}
              >
                <div
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-purple-700 group-hover:scale-110 transition-transform duration-200 cursor-pointer mx-auto"
                  style={{ background: 'linear-gradient(135deg, #a21caf, #d946ef 60%, #7c3aed)' }}
                >
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img src={cat.icon} alt={cat.name} className="object-cover w-full h-full" />
                  </div>
                </div>
                <span className="mt-2 sm:mt-3 text-white text-xs sm:text-sm font-semibold text-center whitespace-normal leading-tight group-hover:text-purple-400 transition-colors duration-200 cursor-pointer block mx-auto">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Modal */}
      {open && activeCategory !== null && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-xs mx-auto flex flex-col items-center">
            {/* Progress Bar */}
            <div className="flex gap-1 w-full px-6 pt-6">
              {storiesData[activeCategory].stories.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full flex-1 ${i <= activeStoryIdx ? 'bg-purple-500' : 'bg-white/30'}`}
                />
              ))}
            </div>
            {/* Story Content (Instagram 9:16 ratio, e.g. 360x640) */}
            <div className="w-[360px] h-[640px] bg-black flex items-center justify-center relative mt-4 rounded-xl shadow-lg overflow-hidden max-w-full">
              {storiesData[activeCategory].stories[activeStoryIdx].type === 'image' ? (
                storiesData[activeCategory].stories[activeStoryIdx].link ? (
                  <a
                    href={storiesData[activeCategory].stories[activeStoryIdx].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full block"
                  >
                    <img
                      src={storiesData[activeCategory].stories[activeStoryIdx].url}
                      alt="story"
                      className="object-contain w-full h-full"
                    />
                  </a>
                ) : (
                <img
                  src={storiesData[activeCategory].stories[activeStoryIdx].url}
                  alt="story"
                  className="object-contain w-full h-full"
                />
                )
              ) : null}
              {storiesData[activeCategory].stories[activeStoryIdx].type === 'video' ? (
                <video
                  src={storiesData[activeCategory].stories[activeStoryIdx].url}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="object-contain w-full h-full bg-black"
                />
              ) : null}
              {/* Left/Right Navigation */}
              {activeStoryIdx > 0 && (
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 bg-black/40 rounded-full hover:bg-purple-500/80 transition-colors duration-200 cursor-pointer"
                  onClick={prevStory}
                  disabled={activeStoryIdx === 0}
                >
                  &#8592;
                </button>
              )}
              {activeStoryIdx < storiesData[activeCategory].stories.length - 1 && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 bg-black/40 rounded-full hover:bg-purple-500/80 transition-colors duration-200 cursor-pointer"
                  onClick={nextStory}
                  disabled={activeStoryIdx === storiesData[activeCategory].stories.length - 1}
                >
                  &#8594;
                </button>
              )}
            </div>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 group cursor-pointer"
              onClick={closeStories}
              aria-label="Close"
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-200 group-hover:rotate-90 group-hover:scale-110"
              >
                <circle cx="19" cy="19" r="18" stroke="#a21caf" strokeWidth="2" fill="#181028" />
                <line x1="12" y1="12" x2="26" y2="26" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="26" y1="12" x2="12" y2="26" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoriesBar; 