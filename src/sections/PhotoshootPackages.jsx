import React from 'react';

const packages = [
  {
    title: 'P1',
    subheading: '5 images per product',
    features: [
      'Theme creative',
      'White background',
      'White background with packaging',
      'Infographic',
      'Graphic Design post',
    ],
    images: [
      { src: '/P1/theme creative.jpg', heading: 'Theme Creative' },
      { src: '/P1/whihtte bg.jpg', heading: 'White Background' },
      { src: '/P1/white bg with paackaging.jpg', heading: 'White BG with Packaging' },
      { src: '/P1/infographic.jpg', heading: 'Infographic' },
      { src: '/P1/graphic designing post.jpg', heading: 'Graphic Designing Post' },
    ],
  },
  {
    title: 'P2',
    subheading: '3 images per product',
    features: [
      'Theme creative',
      'White background',
      'White background with packaging',
      'Infographic',
      'Basic Graphic Design post',
    ],
    images: [
      { src: '/P2/theme creative.jpg', heading: 'Theme Creative' },
      { src: '/P2/white background.jpg', heading: 'White Background' },
      { src: '/P2/white bg with packaaging.jpg', heading: 'White BG with Packaging' },
    ],
  },
  {
    title: 'P3',
    subheading: '1 image per product',
    features: [
      'Theme creative',
      'White background',
      'White background with packaging',
      'Infographic',
      'Basic Graphic Design post',
    ],
    images: [
      { src: '/images/package 3.jpg', heading: 'Theme Creative' },
    ],
  },
];

const PhotoshootPackages = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImages, setModalImages] = React.useState([]);
  const [modalIndex, setModalIndex] = React.useState(0);

  const openModal = (images) => {
    setModalImages(images);
    setModalIndex(0);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevImg = (e) => {
    e.stopPropagation();
    setModalIndex((i) => (i === 0 ? modalImages.length - 1 : i - 1));
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setModalIndex((i) => (i === modalImages.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="w-full flex flex-col items-center py-16 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-purple-400 drop-shadow-lg">Photoshoot Packages</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.title}
            className="group bg-gradient-to-br from-purple-900 via-black to-purple-800 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-md lg:w-[32rem] p-4 pt-8 sm:p-8 sm:pt-12 lg:p-12 lg:pt-20 min-h-[22rem] sm:min-h-[25rem] lg:min-h-[28rem] flex flex-col items-center border-2 border-purple-700 relative overflow-visible"
          >
            {/* Animated border */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl z-20 transition-all duration-500 group-hover:shadow-[0_0_0_4px_rgba(168,85,247,0.5)] group-hover:border-2 group-hover:border-purple-400 border-transparent"></span>
            {/* Ribbon */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-fuchsia-500 px-8 py-2 rounded-b-xl text-lg font-bold text-white tracking-widest shadow-lg z-10">
              {pkg.title}
            </div>
            {/* Subheading for P1 */}
            {pkg.subheading && (
              <div className="text-white-50 text-lg md:text-xl font-bold mb-2 text-center pt-8 md:pt-2">
                {pkg.subheading}
              </div>
            )}
            {/* Features */}
            <ul className="mb-8 flex flex-col justify-center items-start text-left gap-y-4 pt-16 md:pt-8 pb-4 max-w-[18rem] mx-auto">
                {pkg.features.map((feature, i) => {
                  let isCross = false;
                  if (pkg.title === 'P2' && (feature === 'Infographic' || feature === 'Basic Graphic Design post')) {
                    isCross = true;
                  }
                  if (pkg.title === 'P3' && i > 0) {
                    isCross = true;
                  }
                  return (
                    <li key={i} className="flex flex-row items-start gap-2 md:gap-3 items-start">
                      <span className={`inline-block w-7 h-7 rounded-full flex items-center justify-center flex-none shrink-0 pl-1 pt-1 bg-purple-500`}>
                        {isCross ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className="block text-base md:text-lg font-medium text-white text-left pl-2">
                        {feature}
                      </span>
                    </li>
                  );
                })}
            </ul>
            {/* Button */}
            <button
              className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(pkg.images)}>
              Explore Now
            </button>
          </div>
        ))}
      </div>
      {/* Modal Gallery */}
      {modalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-80 transition-all" onClick={closeModal}>
          <div className="relative max-w-lg w-full mx-4 bg-black rounded-xl shadow-2xl flex flex-col items-center p-4 pt-8" onClick={e => e.stopPropagation()}>
            <div className="relative w-full flex justify-center">
              <img src={modalImages[modalIndex].src} alt="Product" className="rounded-lg max-h-[60vh] object-contain mb-2 border-4 border-fuchsia-400 bg-black-100 shadow-xl card w-full" />
              <button
                className="absolute top-2 right-2 z-50 text-white text-2xl font-extrabold hover:text-fuchsia-400 transition-all duration-200 cursor-pointer bg-black-100 border-2 border-fuchsia-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110"
                onClick={closeModal}
                aria-label="Close Modal"
                style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.25)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
                  <line x1="7" y1="7" x2="17" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="17" y1="7" x2="7" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="text-white-50 text-lg font-semibold mb-2 text-center w-full">{modalImages[modalIndex].heading}</div>
            <div className="flex justify-between items-center w-full mt-2">
              {modalIndex > 0 ? (
                <button
                  onClick={prevImg}
                  className="text-white text-2xl md:text-3xl p-0 hover:text-fuchsia-400 cursor-pointer bg-black-100 border-2 border-fuchsia-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
                  aria-label="Previous Image"
                >
                  &#8592;
                </button>
              ) : <span className="w-12 h-12" />}
              <span className="text-white-50 text-base">{modalIndex + 1} / {modalImages.length}</span>
              {modalIndex < modalImages.length - 1 ? (
                <button
                  onClick={nextImg}
                  className="text-white text-2xl md:text-3xl p-0 hover:text-fuchsia-400 cursor-pointer bg-black-100 border-2 border-fuchsia-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
                  aria-label="Next Image"
                >
                  &#8594;
                </button>
              ) : <span className="w-12 h-12" />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoshootPackages; 