import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import CoursesSection from './components/CoursesSection';
import StatsSection from './components/StatsSection';
import AboutFounders from './components/AboutFounders';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <CoursesSection />
        <StatsSection />
        <Testimonials />
        <AboutFounders />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;