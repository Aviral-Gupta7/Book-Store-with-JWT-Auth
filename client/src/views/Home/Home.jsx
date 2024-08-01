import React from "react";
import booksImg from "../../assets/books.png";
import { Link } from "react-router-dom";

function Home() {
  const books = [
    {
      img: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY466_.jpg",
      title: "The Power of Your Subconscious Mind",
      price: 275,
    },
    {
      img: "https://m.media-amazon.com/images/I/51sMJkf2YaL._SY445_SX342_.jpg",
      title: "Varchasva",
      price: 325,
    },
    {
      img: "https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_.jpg",
      title: "The Silent Patient",
      price: 247,
    },
    {
      img: "https://m.media-amazon.com/images/I/41h1AktRBmL._SY445_SX342_.jpg",
      title: "Courage To Be Disliked",
      price: 322,
    },
  ];

  return (
    <div className="h-fit">
      <div className="bg-blue-400 w-full min-h-[300px] md:h-[500px] flex flex-col md:flex-row mb-6 md:mb-10">
        <span className="h-full w-full md:w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Oswald'] text-white drop-shadow-xl text-center md:text-left flex justify-center items-center p-4 md:p-8 lg:px-12 xl:px-16">
          Welcome to our online sanctuary of stories, where each book is a
          gateway to adventure, knowledge, and endless inspiration.
        </span>
        <img src={booksImg} alt="Books" className="w-full md:w-1/2 object-cover" />
      </div>
      <div className="flex flex-col h-auto md:h-[750px] justify-around items-center px-4 md:px-0">
        <div className="w-full md:w-2/3 h-auto md:h-[80%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center font-['Poppins'] mb-6">
            Top Sellers
          </h1>
          <div className="flex flex-wrap justify-center">
            {books.map((book, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4 cursor-pointer">
                <img
                  src={book.img}
                  alt={book.title}
                  className="shadow-2xl w-full h-auto"
                />
                <p className="text-base md:text-lg font-semibold mt-4">
                  {book.title}
                </p>
                <p>&#x20b9; {book.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center my-8">
          <Link
            to="/store"
            className="border-2 border-black px-4 py-2 md:px-6 md:py-4 font-['Oswald'] text-xl md:text-2xl lg:text-3xl font-bold rounded-lg hover:bg-blue-400 hover:text-white hover:tracking-wider transition-all duration-300 ease-in-out"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
