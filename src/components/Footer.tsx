import React from 'react';
import {
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl text-white">
                CandleCraft<span className="text-primary">Academy</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Nepal’s leading trading institute empowering future traders through real-world education in forex, gold, and prop firm strategies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/candlecraftacademy77/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/candlecraftnp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#faqs" className="text-gray-300 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Courses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Forex & Gold Mastery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Prop Firm Challenge Prep</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Beginner to Pro Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Live Trading Sessions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Weekend Bootcamps</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+977 986-6976329</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">contact.candlecraft@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Thapagaun, Baneshwor, Kathmandu, Nepal
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Samyak Ghaju. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
