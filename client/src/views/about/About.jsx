import React from 'react';
import { FaBook, FaUserFriends, FaTruck, FaHeadset } from 'react-icons/fa';

const About = () => {
  const benefits = [
    { icon: <FaBook />, title: "Vast Selection", description: "Thousands of books across all genres" },
    { icon: <FaUserFriends />, title: "Community", description: "Join discussions and share reviews" },
    { icon: <FaTruck />, title: "Fast Delivery", description: "Quick and reliable shipping" },
    { icon: <FaHeadset />, title: "24/7 Support", description: "Always here to assist you" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-blue-600">About Our Bookstore</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Our Mission</h2>
          <p className="text-base sm:text-lg text-gray-700 text-center max-w-2xl mx-auto">
            We're on a mission to inspire minds and ignite imaginations through the power of books. 
            Our goal is to make reading accessible, enjoyable, and transformative for everyone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl sm:text-4xl text-blue-500 mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Our Commitment</h2>
          <p className="text-base sm:text-lg text-center max-w-2xl mx-auto">
            We're dedicated to promoting literacy, supporting authors, and creating a vibrant reading community. 
            By choosing our bookstore, you're not just buying a book – you're joining a movement to make the world 
            more informed, imaginative, and inspired.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;