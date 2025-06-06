import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const stats = [
    { value: 5, suffix: '+', label: 'Years of Experience' },
    { value: 500, suffix: '+', label: 'Students Enrolled' },
    { value: 100, suffix: '+', label: 'Funded Traders Created' },
  ];

  return (
    <section className="py-16 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-primary text-5xl font-bold mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  enableScrollSpy={true}
                  separator=","
                />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
