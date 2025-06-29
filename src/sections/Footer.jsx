import { socialImgs } from "../constants";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <Link to="/terms" className="text-white-50 hover:text-purple-400 font-semibold transition-colors duration-300 cursor-pointer">Terms & Conditions</Link>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              className="icon"
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialImg.name}
            >
              {socialImg.name === 'tiktok' ? (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
                  <rect width="48" height="48" rx="12" fill="none" />
                  <path d="M34.5 20.5c-2.5 0-4.5-2-4.5-4.5V10h-4v20c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V22c-.3 0-.7-.1-1-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8V24.5c1.2 1 2.7 1.5 4.5 1.5v-3.5z" fill="#fff"/>
                  <path d="M34.5 20.5c-2.5 0-4.5-2-4.5-4.5V10h-4v20c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V22c-.3 0-.7-.1-1-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8V24.5c1.2 1 2.7 1.5 4.5 1.5v-3.5z" fill="#000" fillOpacity=".1"/>
                  <path d="M30 10v6c0 2.5 2 4.5 4.5 4.5v-3c-1.4 0-2.5-1.1-2.5-2.5V10h-2z" fill="#25F4EE"/>
                  <path d="M34.5 20.5c-2.5 0-4.5-2-4.5-4.5V10h-2v16.5c1.2 1 2.7 1.5 4.5 1.5v-3.5z" fill="#FE2C55"/>
                  <path d="M26 10v20c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V22c-.3 0-.7-.1-1-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8V10h-4z" fill="#fff"/>
                </svg>
              ) : (
                <img src={socialImg.imgPath} alt="social icon" />
              )}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} StartupsBySaqib. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
