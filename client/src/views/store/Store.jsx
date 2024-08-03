import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StorePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/listing/get", {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        setBooks(data);
      }
    }
    fetchData();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.booktitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.authorname.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={book.bookdisplayphoto}
              alt={book.booktitle}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-2">{book.booktitle}</h2>
                <p className="text-gray-600 mb-1">By {book.authorname}</p>
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
        <p className="text-center text-lg mt-8">
          No books found. Try a different search term.
        </p>
      )}

      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default StorePage;
