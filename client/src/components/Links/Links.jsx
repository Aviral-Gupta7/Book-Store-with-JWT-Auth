import { NavLink } from "react-router-dom";

function Links({ to = "/", className = "", value }) {
  return (
    <NavLink
      className={` relative before:content-[''] before:absolute before:h-[3px] before:w-0  before:right-0 before:left-0 before:bottom-0 before:bg-black hover:before:w-full before:transition-[width] duration-700 ease-in-out ${className}`}
      to={to}
    >
      {value}
    </NavLink>
  );
}

export default Links;
