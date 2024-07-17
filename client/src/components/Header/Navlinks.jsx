import React from "react";
import { NavLink } from "react-router-dom";

function Navlinks({ className }) {
  const underlineHoverEffect =
    " relative before:content-[''] before:absolute before:h-[3px] before:w-0  before:right-0 before:left-0 before:bottom-0 before:bg-black hover:before:w-full before:transition-[width] duration-700 ease-in-out";
  return (
    <>
      <ul className={`flex ${className}`}>
        <li className={`${underlineHoverEffect}`}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={`${underlineHoverEffect}`}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={`${underlineHoverEffect}`}>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li className={`${underlineHoverEffect}`}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navlinks;
