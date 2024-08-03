import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const navLinkHoverEffect =
    "relative before:content-[''] before:absolute before:h-[3px] before:w-0  before:right-0 before:left-0 before:bottom-0 before:bg-black hover:before:w-full before:transition-[width] duration-700 ease-in-out";
  const [formdata, setFormdata] = useState({ email: "" });
  const handleSubmit = (e) => {
    e.target.preventDefault();
    setFormdata({ email: "" });
  };
  return (
    <footer className="  flex flex-col  border-gray-400 border-t-2">
      <div className="flex flex-col justify-center items-center my-4 gap-5 mx-auto w-[80%] border-b-2 border-[#ffffff33]">
        <div>
          <Link
            to="/"
            className=" flex items-center text-3xl md:text-4xl font-['Playwrite_HU'] text-[#1B1A17] font-semibold "
          >
            Books <span className="text-[#E45826]">Heaven</span>
          </Link>
        </div>
        <div className="font-['Poppins'] text-center">
          Get Handpicked book recommendations tailored to your tastes and
          interests!
        </div>
        <div>
          <form
            className="border-[#1B1A17] border-2 flex mx-4 mb-5 w-full"
            onSubmit={handleSubmit}
          >
            <input
              value={formdata.email}
              onChange={(e) => setFormdata({ email: e.target.value })}
              className=" px-4 py-2 font-['Poppins']  outline-none w-10/12"
              type="email"
              placeholder="user@mail.com"
            />
            <button
              className="font-semibold font-['Oswald'] px-4 py-2 bg-[#E6D5B8] text-[#1B1A17] hover:bg-[#F0A500] uppercase hover:tracking-[0.15em] transition-all duration-300 ease-in-out border-4 border-[#E6D5B8] hover:border-[#F0A500]"
              type="submit"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center md:justify-evenly">
        <div className="w-full md:w-1/2 my-4 flex justify-center md:justify-evenly gap-10 md:gap-0 text-2xl font-['Poppins'] font-semibold">
          <div className="flex flex-col text-center gap-3 py-4 min-w-fit">
            <span className="uppercase underline underline-offset-8 font-bold tracking-[0.15em] font-['Oswald'] text-2xl mb-4">
              About
            </span>
            <Link to="/about" className={navLinkHoverEffect}>
              About Us
            </Link>
            <Link
              to="https://github.com/ACM-JUIT/Book-Store-with-JWT-Auth"
              target="_blank"
              className={navLinkHoverEffect}
            >
              Source Code
            </Link>
          </div>
          <div className="flex flex-col text-center gap-3 py-4 min-w-fit ">
            <span className="uppercase underline underline-offset-8 font-bold tracking-[0.15em] font-['Oswald'] text-2xl mb-4">
              Help
            </span>
            <Link className={navLinkHoverEffect}>Contact</Link>
            <Link className={navLinkHoverEffect}>Social Media</Link>
          </div>
        </div>

        <div className="hidden md:block w-1/2 px-8 py-4 my-4 font-['Poppins'] border-l-2 border-black ">
          Welcome to Books Heaven, your premier online book store dedicated to
          bringing you the best in literature. Dive into a carefully curated
          selection spanning classics to contemporary bestsellers. Whether
          you're a fiction aficionado, a history buff, or seeking
          self-improvement, we're here to enhance your reading journey. Enjoy a
          seamless shopping experience and immerse yourself in the world of
          books with Books Heaven!
        </div>
      </div>
    </footer>
  );
}

export default Footer;
