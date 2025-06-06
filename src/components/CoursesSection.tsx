import React from 'react';
import { TrendingUp, BookOpen, Video } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Online Class',
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    description: "Master forex and gold trading from anywhere. Learn price action, SMC, market structure, and risk management.",
    duration: '8 Weeks',
    price: '15,000',
    oldPrice: '20,000',
    features: [
      'Live Trading Sessions',
      '24/7 Doubt Solving',
      'Technical Analysis Mastery',
      'Lifetime Access',
    ],
    color: 'bg-[#FFF8E7]',
    formLink: 'https://forms.gle/YOUR_FORM_ONLINE'
  },
  {
    id: 2,
    title: 'Physical Class',
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    description: "Join in-person classes in Kathmandu. Hands-on mentorship with real-time practice and expert support.",
    duration: '8 Weeks',
    price: '30,000',
    oldPrice: '40,000',
    features: [
      'Live In-Person Classes',
      'Real-Time Market Practice',
      '1-on-1 Expert Mentorship',
      'Offline Community Support',
    ],
    color: 'bg-[#FFEFE3]',
    formLink: 'https://forms.gle/YOUR_FORM_PHYSICAL'
  },
  {
    id: 3,
    title: 'Webinar Class',
    icon: <Video className="w-6 h-6 text-primary" />,
    description: "Join our free webinar for an intro to forex, gold trading, and smart money concepts. Perfect for beginners.",
    duration: '1 Day',
    price: 'FREE',
    features: [
      'Intro to Forex & Gold',
      'Live Market Breakdown',
      'Q&A With Experts',
      'Exclusive Course Discounts',
    ],
    color: 'bg-[#EAF2FF]',
    formLink: 'https://forms.gle/YOUR_FORM_WEBINAR'
  }
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            LEARN <span className="text-primary">WITH US</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a training program that matches your goals. Learn practical, applicable skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`rounded-xl shadow-md p-6 flex flex-col justify-between ${course.color}`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {course.icon}
                  <h3 className="text-xl font-semibold text-dark">{course.title}</h3>
                </div>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  {course.description}
                </p>
                <p className="text-sm text-gray-600 mb-1">Duration: {course.duration}</p>
                <div className="text-lg font-bold mb-4">
                  {course.oldPrice && course.price !== 'FREE' && (
                    <span className="line-through text-gray-400 mr-2">
                      NPR {course.oldPrice}
                    </span>
                  )}
                  <span className={course.price === 'FREE' ? 'text-green-600' : ''}>
                    {course.price === 'FREE' ? 'FREE' : `NPR ${course.price}`}
                  </span>
                </div>
                <ul className="text-sm text-gray-800 space-y-1 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>✔️ {feature}</li>
                  ))}
                </ul>
              </div>
              <a
                href={course.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full text-center bg-primary text-white py-2 rounded-md font-medium hover:bg-primary-dark transition"
              >
                {course.price === 'FREE' ? 'Join Webinar' : 'Enroll Now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
