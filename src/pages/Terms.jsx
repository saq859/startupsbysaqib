import React from 'react';
import { useNavigate } from 'react-router-dom';

const rules = [
  'All content on this website, including text, images, designs, and code, is the intellectual property of [STartupsBysaqib], unless otherwise stated. You may not copy, reproduce, or distribute any part of this website without permission.',
  'This website is intended to showcase my professional work, skills, and services. Any misuse, unauthorized access, or attempt to harm the website\'s functionality is strictly prohibited.',
  'Some projects displayed may belong to clients or collaborators. These are shared only for portfolio purposes, and all respective rights remain with the original owners.',
  'Information provided on this website is for general purposes only. I do not guarantee the accuracy, completeness, or timeliness of any content presented.',
  'I reserve the right to modify or update these terms at any time without prior notice. Continued use of this website implies your acceptance of the updated terms.',
];

const Terms = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-fuchsia-900 to-black px-4 py-16">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-white/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/40 to-transparent opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-gradient-to-tl from-fuchsia-500/40 to-transparent opacity-60 pointer-events-none" />
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent drop-shadow-lg">Terms & Conditions</h1>
        <ul className="list-disc pl-6 text-lg text-white-50 space-y-4 mb-8">
          {rules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
        <p className="text-gray-300 text-center mt-8">By using this site, you agree to abide by these terms and conditions.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-10 w-full py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold rounded-xl hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 text-xl shadow-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Terms; 