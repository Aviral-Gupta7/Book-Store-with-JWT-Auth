import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center  font-['Playwrite_HU'] text-[#1B1A17] "
    >
      Books <span className="text-[#E45826]">Heaven</span>
    </Link>
  );
}

export default Logo;
