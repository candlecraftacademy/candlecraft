import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Saurav Karki",
      role: "Funded Prop Firm Trader",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      content: "Before joining CCA, I was just guessing trades. Now I understand market structure, price action, and how to pass funded accounts. I got my first payout from FundedNext just 2 months after the course.",
      rating: 5
    },
    {
      id: 2,
      name: "Puja Shrestha",
      role: "Beginner to Full-time Trader",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      content: "CCA gave me the confidence to leave my job and trade full-time. The step-by-step teaching and real-time mentorship helped me understand even complex trading strategies.",
      rating: 5
    },
    {
      id: 3,
      name: "Rabin Bhandari",
      role: "Student + Trader",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      content: "As a college student, I never thought I'd be able to earn online. Thanks to CCA, I now trade gold and forex with proper risk and psychology, and I’m building real income while studying.",
      rating: 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHAT <span className="text-primary">TRADERS SAY</span></h2>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-500 text-sm">by {testimonials.length}+ happy traders</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden py-6">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{testimonial.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-primary p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-primary p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
