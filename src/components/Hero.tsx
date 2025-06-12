import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import TradingViewWidget from './TradingViewWidget';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: 'transparent' } }, // Transparent background
    fpsLimit: 60,
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: '#ffffff' }, // White particles for dark bg
      opacity: { value: 0.05 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.3, random: true },
    },
    detectRetina: true,
  };

  return (
    <section className="relative w-full text-white overflow-hidden bg-[#0a0f1c] font-poppins min-h-screen flex items-center">
      <Particles init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* LEFT COLUMN */}
        <div className="lg:w-1/2 text-left py-20">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 tracking-tight">
            Master Forex & Gold <br />
            <span className="font-bold text-white">Trading with Candle Craft Academy</span>
          </h1>

          {/* Features */}
          <div className="flex flex-wrap gap-10 mb-10">
            {[
              {
                title: '500+ Students',
                desc: 'Trained in Forex & Gold',
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="mb-2 text-primary">
                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm-1 14.27L3.64 12.5l-.14.11V17h7v2H5v2h14v-2h-7v-2h7v-4.39l-9 4.09z" />
                  </svg>
                )
              },
              {
                title: 'Pass Funded Accounts',
                desc: 'With Proven Strategy',
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="mb-2 text-primary">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34a1.25 1.25 0 0 0 0-1.77l-2.34-2.34a1.25 1.25 0 0 0-1.77 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                )
              },
              {
                title: '1:1 Mentorship',
                desc: 'From Pro Traders',
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="mb-2 text-primary">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                )
              },
              {
                title: 'VIP Community',
                desc: 'Lifetime Access',
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="mb-2 text-primary">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.08 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                )
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-32">
                {item.svg}
                <h4 className="font-bold text-base mb-1 text-white">{item.title}</h4>
                <p className="text-xs text-[#9da1b3]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="#courses"
              className="relative inline-block px-8 py-4 text-lg font-semibold rounded-md bg-gradient-to-r from-[#f02b48] to-[#ff5f6d] text-white overflow-hidden shine-effect"
            >
              Join Now →
            </a>
            <a
              href="https://www.youtube.com/@Manishfxthetrader"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-semibold rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition"
            >
              Watch Our Videos
            </a>
          </div>

          {/* Trustpilot */}
          <div className="flex items-center gap-2 text-sm text-[#9da1b3]">
            <span className="font-semibold text-white">Excellent</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Trustpilot_logo_2022.svg"
              alt="Trustpilot"
              className="h-5"
            />
            <span>35,094 reviews on</span>
            <span className="text-green-400 font-semibold">Trustpilot</span>
          </div>
        </div>

        {/* RIGHT COLUMN — TradingView Public Widget */}
        {/* RIGHT COLUMN — TradingView Widget */}
<div className="lg:w-1/2 flex justify-center items-end mt-10 lg:mt-0">
  <TradingViewWidget />
</div>

      {/* CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0.2) 100%
          );
          transform: skewX(-20deg);
          animation: shine 2.5s infinite;
        }
        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
