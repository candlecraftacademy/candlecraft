import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-semibold mb-2">Welcome to Candle Craft Academy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark">
              Nepal’s Premier <br />
              Trading Education Hub
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Master forex, gold, and prop firm trading with expert-led courses designed to turn Nepali traders into global market professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="btn btn-primary">
                Explore Courses
              </a>
              <a href="#watch-video" className="btn btn-outline flex items-center justify-center gap-2">
                <Play size={16} className="text-primary" /> Watch Video
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="https://i.imgur.com/eWG4HLD.png" 
                alt="Trading Experts"
                className="rounded-lg shadow-xl relative z-10 max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg z-20 flex items-center">
                <div className="mr-3">
                  <div className="flex -space-x-2">
                    <img 
                      src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
                      alt="Trader" 
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" 
                      alt="Trader" 
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xs">1000+ Traders</p>
                  <div className="flex items-center">
                    <span className="text-yellow-300 text-xs">★★★★★</span>
                    <span className="text-xs ml-1">5.0 (389 Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;