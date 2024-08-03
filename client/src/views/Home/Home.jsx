import React, { useEffect } from "react";
import booksImg from "../../assets/books.png";
import { Link } from "react-router-dom";
import Button from "../../components/Header/Button";

function Home() {
  const [books, setBooks] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/listing/get", {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        if (data.length > 4) {
          setBooks(data.splice(0, 4));
        } else {
          setBooks(data);
        }
      }
    }
    fetchData();
  }, []);
  return (
    <div className="h-fit">
      <div className=" hidden bg-blue-400 w-full min-h-[300px] md:h-[500px] sm:flex flex-col md:flex-row mb-6 md:mb-10">
        <span className="hidden h-full w-full md:w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Oswald'] text-white drop-shadow-xl text-center md:text-left md:flex justify-center items-center p-4 md:p-8 lg:px-12 xl:px-16">
          Welcome to our online sanctuary of stories, where each book is a
          gateway to adventure, knowledge, and endless inspiration.
        </span>
        <img
          src={booksImg}
          alt="Books"
          className="w-full md:w-1/2 object-cover"
        />
      </div>
      <div className="flex flex-col h-auto md:h-[750px] justify-around items-center px-4 md:px-0">
        <div className="w-full md:w-2/3 h-contain md:h-[80%]">
          <div className="flex flex-wrap justify-center">
            {books.map((book, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/4 p-4 cursor-pointer"
              >
                <img
                  src={book.bookdisplayphoto}
                  alt={book.booktitle}
                  className="shadow-2xl min-w-full h-auto"
                />
                <p className="text-base md:text-lg font-semibold mt-4">
                  {book.booktitle}
                </p>
                <p>&#x20b9; {book.price}</p>
              </div>
            ))}
          </div>
          <div className="my-8 flex justify-center">
            <Button to="/store" type="button" value="Shop Now" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
