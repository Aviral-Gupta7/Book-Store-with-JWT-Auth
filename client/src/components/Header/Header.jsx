import { useState } from "react";
import Logo from "../Logo/Logo";
import Navlinks from "./Navlinks";
import Searchbar from "./Searchbar";
import Button from "./Button";
import Hamburger from "hamburger-react";
import HamMenu from "./HamMenu";
import { useSelector } from "react-redux";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <div
        className={`${
          !isOpen && "border-b-2"
        } border-gray-400 flex justify-between md:justify-between py-2`}
      >
        {/* Icon */}
        <div className="font-semibold w-1/3 lg:w-auto flex items-center text-2xl md:text-3xl lg:text-4xl">
          <Logo />
        </div>
        {/* Middle */}
        <div className="hidden w-1/3 lg:w-auto sm:flex justify-center lg:justify-between  gap-12">
          <div className="hidden lg:flex">
            <Navlinks className="gap-8 items-center text-xl font-['Oswald'] font-normal" />
          </div>
          <div className="flex items-center">
            <Searchbar />
          </div>
        </div>
        {/* End */}
        <div className="w-1/3 lg:w-auto flex justify-end">
          {currentUser ? (
            "Logged in"
          ) : (
            <>
              <Button
                value="Sign Up"
                to="/signup"
                className="hidden lg:flex mx-4"
              />
              <div className="flex lg:hidden">
                <Hamburger
                  toggled={isOpen}
                  toggle={() => {
                    setOpen(!isOpen);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <HamMenu isOpen={isOpen} />
    </div>
  );
}

export default Header;
