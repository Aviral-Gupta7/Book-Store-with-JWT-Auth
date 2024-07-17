import React from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar({ className }) {
  return (
    <>
      <input
        placeholder="Search..."
        className={`border-2 border-gray-500 relative  text-left px-[10px] py-1 rounded-xl overflow-hidden pl-8 ${className}`}
      />
      <i className="absolute px-2">
        <FaSearch className="text-gray-400" />
      </i>
    </>
  );
}

export default Searchbar;
