import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="https://i.imgur.com/u71NVv4.png"
              alt="CandleCraft Academy Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-dark-light hover:text-primary font-medium transition-colors">Home</a>
            <a href="#about" className="text-dark-light hover:text-primary font-medium transition-colors">About Us</a>
            <a href="#courses" className="text-dark-light hover:text-primary font-medium transition-colors">Courses</a>
            <a href="#testimonials" className="text-dark-light hover:text-primary font-medium transition-colors">Testimonials</a>
            <a
              href="https://wa.me/9779866976329"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-medium px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.08L2 22l5.12-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.53 2 12.01 2Zm.35 17.21c-1.96 0-3.78-.58-5.31-1.68l-.38-.26-3.15.82.84-3.08-.24-.4a8.21 8.21 0 0 1-1.29-4.43c0-4.51 3.68-8.18 8.2-8.18 2.19 0 4.24.85 5.79 2.4a8.12 8.12 0 0 1 2.4 5.79c-.01 4.52-3.69 8.2-8.26 8.2Zm4.57-6.17c-.25-.12-1.45-.72-1.67-.8-.22-.09-.38-.12-.54.12-.15.25-.62.8-.76.97-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.03-1.25-.75-.66-1.26-1.47-1.41-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.07-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42l-.46-.01a.9.9 0 0 0-.66.31c-.23.25-.88.86-.88 2.08s.91 2.41 1.03 2.58c.12.16 1.79 2.74 4.34 3.84.61.26 1.09.42 1.46.54.61.19 1.17.17 1.61.1.49-.07 1.45-.59 1.66-1.15.21-.57.21-1.05.15-1.15-.06-.1-.23-.16-.48-.28Z" />
              </svg>
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-dark-light hover:text-primary font-medium transition-colors py-2">Home</a>
              <a href="#about" className="text-dark-light hover:text-primary font-medium transition-colors py-2">About Us</a>
              <a href="#courses" className="text-dark-light hover:text-primary font-medium transition-colors py-2">Courses</a>
              <a href="#testimonials" className="text-dark-light hover:text-primary font-medium transition-colors py-2">Testimonials</a>
              <a
                href="https://wa.me/9779866976329"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-medium px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.08L2 22l5.12-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.53 2 12.01 2Zm.35 17.21c-1.96 0-3.78-.58-5.31-1.68l-.38-.26-3.15.82.84-3.08-.24-.4a8.21 8.21 0 0 1-1.29-4.43c0-4.51 3.68-8.18 8.2-8.18 2.19 0 4.24.85 5.79 2.4a8.12 8.12 0 0 1 2.4 5.79c-.01 4.52-3.69 8.2-8.26 8.2Zm4.57-6.17c-.25-.12-1.45-.72-1.67-.8-.22-.09-.38-.12-.54.12-.15.25-.62.8-.76.97-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.03-1.25-.75-.66-1.26-1.47-1.41-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.07-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42l-.46-.01a.9.9 0 0 0-.66.31c-.23.25-.88.86-.88 2.08s.91 2.41 1.03 2.58c.12.16 1.79 2.74 4.34 3.84.61.26 1.09.42 1.46.54.61.19 1.17.17 1.61.1.49-.07 1.45-.59 1.66-1.15.21-.57.21-1.05.15-1.15-.06-.1-.23-.16-.48-.28Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
