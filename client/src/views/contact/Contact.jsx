import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 sm:p-6">
          <p className="text-base sm:text-lg mb-4">
            We'd love to hear from you! If you have any questions, suggestions, or just want to say hello, please don't hesitate to reach out.
          </p>
          
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Phone</h2>
            <p className="text-base sm:text-lg">
              <a href="tel:8629000000" className="text-blue-500 hover:underline">8629......00</a>
            </p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Email</h2>
            <p className="text-base sm:text-lg">
              <a href="mailto:ak123@gmail.com" className="text-blue-500 hover:underline">ak123@gmail.com</a>
            </p>
          </div>
          
          <div className="mt-6 sm:mt-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;