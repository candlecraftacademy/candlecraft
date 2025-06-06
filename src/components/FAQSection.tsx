import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 px-6 flex justify-between items-center hover:bg-dark-lighter transition-colors duration-300"
        onClick={toggleOpen}
      >
        <h4 className="text-left font-semibold text-white">{question}</h4>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="py-4 px-6 bg-dark-light">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is Candle Craft Academy different from other trading institutes?",
      answer: "Unlike most academies that rely on outdated theory, CCA focuses on live trading, psychological mastery, and prop firm challenge preparation. Our founders — Manish Thapa and Bhuwan Thapa — are active traders who share real trades, live breakdowns, and provide personalized mentorship. Students also get lifetime community access and continued guidance."
    },
    {
      question: "Do I need prior trading experience to join your courses?",
      answer: "No prior experience is needed. Our courses are designed for complete beginners as well as intermediate traders looking to sharpen their skills."
    },
    {
      question: "What is the success rate of your students?",
      answer: "Over 70% of our active students have passed prop firm challenges or started trading profitably after completing our course. Many have received payouts from firms like FundedNext and FTMO."
    },
    {
      question: "Do you provide any job placements after course completion?",
      answer: "While we don't offer traditional job placements, we prepare you to qualify for funded accounts and earn from prop firms, which can become a full-time trading career."
    },
    {
      question: "What is your refund policy?",
      answer: "As we offer premium content, live mentorship, and digital access, we follow a strict no-refund policy once the course is purchased."
    },
    {
      question: "How much capital do I need to start trading after the course?",
      answer: "You can begin with as low as $100 for personal trading or apply for funded accounts starting from $6,000 to $100,000 capital with proper risk management."
    },
    {
      question: "Do you provide trading signals or recommendations?",
      answer: "No. We focus on teaching self-reliant trading skills. However, we do live analysis and breakdowns to help you understand real-time decision-making."
    },
    {
      question: "Can I access the course content after completion?",
      answer: "Yes. Both our online and physical course students receive lifetime access to course materials, updates, and our premium trading community."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">MOST POPULAR <span className="text-primary">QUESTIONS</span></h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-dark-light rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;