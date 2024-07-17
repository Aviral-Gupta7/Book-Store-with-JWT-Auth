import React from "react";
import { Link } from "react-router-dom";

function Button({ value, type = "submit", to = "/", className = "" }) {
  return (
    <Link
      to={to}
      className={`items-center border-2 border-gray-500 py-2 px-5  font-['Oswald'] text-xl rounded-xl hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out ${className}`}
      type={type}
    >
      {value}
    </Link>
  );
}

export default Button;
