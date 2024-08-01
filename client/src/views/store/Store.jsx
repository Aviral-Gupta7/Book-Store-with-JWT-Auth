import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const books = [
    {
      id: 1,
      title: "The Power of Your Subconscious Mind",
      author: "Joseph Murphy",
      price: 275,
      image: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY466_.jpg",
      category: "Self-help"
    },
    {
      id: 2,
      title: "Varchasva",
      author: "Aditya Tiwari",
      price: 325,
      image: "https://m.media-amazon.com/images/I/51sMJkf2YaL._SY445_SX342_.jpg",
      category: "Fiction"
    },
    {
      id: 3,
      title: "THE SILENT PATIENT",
      author: "Alex Michaelides",
      price: 247,
      image: "https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_.jpg",
      category: "Thriller"
    },
    {
      id: 4,
      title: "Courage To Be Disliked",
      author: "Ichiro Kishimi",
      price: 322,
      image: "https://m.media-amazon.com/images/I/41h1AktRBmL._SY445_SX342_.jpg",
      category: "Self-help"
    },
    {
      id: 5,
      title: "Atomic Habits",
      author: "James Clear",
      price: 420,
      image: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY342_.jpg",
      category: "Self-help"
    },
    {
      id: 6,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: 199,
      image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SY445_.jpg",
      category: "Self-help"
    },
    {
      id: 7,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 350,
      image: "https://m.media-amazon.com/images/I/71UwSHSZRnS._SY445_.jpg",
      category: "Fiction"
    },
    {
      id: 8,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      price: 400,
      image: "https://m.media-amazon.com/images/I/81YOuOGFCJL._SY445_.jpg",
      category: "Fantasy"
    },
    // Add more books as needed
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (book) => {
    // Implement add to cart functionality
    console.log(`Added ${book.title} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center font-['Poppins'] mb-6">
        Our Bookstore
      </h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search books by title, author, or category"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={book.image} alt={book.title} className="w-full h-48 sm:h-56 object-cover" />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-1">By {book.author}</p>
                <p className="text-gray-600 mb-2">Category: {book.category}</p>
              </div>
              <div>
                <p className="text-xl font-bold mb-3">&#x20b9;{book.price}</p>
                <button
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => handleAddToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-center text-lg mt-8">No books found. Try a different search term.</p>
      )}

      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default StorePage;
