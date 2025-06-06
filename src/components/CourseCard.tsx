import React from 'react';

const CourseCard = ({ course }) => {
  const formatPrice = (amount) => {
    if (amount === 0) return "FREE";
    return `NPR ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <div className={`rounded-xl shadow-md p-6 w-full max-w-sm ${course.color}`}>
      <div className="flex items-center mb-4">
        {course.icon}
        <h3 className="ml-3 text-xl font-semibold">{course.title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-1">Duration: {course.duration}</p>
        <div className="text-xl font-bold text-dark">
          {course.oldPrice && course.price !== 0 && (
            <span className="text-gray-400 line-through mr-2">
              {formatPrice(course.oldPrice)}
            </span>
          )}
          <span className={`${course.price === 0 ? 'text-green-600' : ''}`}>
            {formatPrice(course.price)}
          </span>
        </div>
      </div>
      <ul className="text-sm text-gray-800 space-y-1 mb-6">
        {course.features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <button className="w-full py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
        {course.price === 0 ? "Join Webinar" : "Enroll Now"}
      </button>
    </div>
  );
};

export default CourseCard;
