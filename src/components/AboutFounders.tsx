import React from 'react';

const AboutFounders = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT THE <span className="text-primary">FOUNDERS</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The visionary minds behind Candle Craft Academy turned their passion for trading into Nepal's most trusted hub for forex and prop firm education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg" 
              alt="Twenty Traders Founders" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">The Visionary Co-Founders of Candle Craft Academy</h3>
            
            <p className="text-gray-700 mb-4">
               Manish Thapa and Bhuwan Thapa, experienced forex traders and trading mentors, founded Candle Craft Academy with a mission to redefine trading education in Nepal — focusing on forex, gold, and prop firm mastery.
            </p>
            
            <p className="text-gray-700 mb-4">
              With years of real-time trading experience across major global sessions, they have developed powerful strategies rooted in price action, institutional concepts, and market psychology — consistently delivering results in dynamic conditions.
            </p>
            
            <p className="text-gray-700 mb-4">
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#courses" className="btn btn-primary">
                Explore Our Courses
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;