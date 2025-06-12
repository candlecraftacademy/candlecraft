import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: '#0a0f1c' } },
    fpsLimit: 60,
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: '#ffffff' },
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
            Empowering Promising <br />
            <span className="font-bold text-white">Traders Worldwide</span>
          </h1>

          {/* Features */}
          <div className="flex flex-wrap gap-10 mb-10">
            {[
              {
                icon: 'https://www.svgrepo.com/show/363874/database.svg',
                title: 'Up to 95%',
                desc: 'of Profit Split',
              },
              {
                icon: 'https://www.svgrepo.com/show/354123/graph-growth.svg',
                title: 'Up to $300k',
                desc: 'Trading Accounts',
              },
              {
                icon: 'https://www.svgrepo.com/show/366760/dollar.svg',
                title: '24 Hours',
                desc: 'Guaranteed Payout',
              },
              {
                icon: 'https://www.svgrepo.com/show/372133/timer.svg',
                title: 'No time limit',
                desc: 'in Challenge Phase',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-32">
                <img src={item.icon} alt={item.title} className="h-8 mb-2 opacity-80" />
                <h4 className="font-bold text-base mb-1 text-white">{item.title}</h4>
                <p className="text-xs text-[#9da1b3]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="#"
              className="relative inline-block px-8 py-4 text-lg font-semibold rounded-md bg-gradient-to-r from-[#f02b48] to-[#ff5f6d] text-white overflow-hidden shine-effect"
            >
              Start Challenge →
            </a>
            <a
              href="#"
              className="px-8 py-4 text-lg font-semibold rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition"
            >
              Free Trial
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

        {/* RIGHT COLUMN */}
        <div className="lg:w-1/2 flex justify-center items-end mt-10 lg:mt-0">
          <img
            src="https://i.imgur.com/jeX0VFM.png"
            alt="Candles"
            className="max-w-[400px] w-full opacity-60"
          />
        </div>
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