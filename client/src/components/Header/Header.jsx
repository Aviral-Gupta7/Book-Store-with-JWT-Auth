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
      <div className="border-b-2 flex justify-between py-2">
        {/* Icon */}
        <div className="font-semibold flex items-center text-2xl md:text-3xl lg:text-4xl">
          <Logo />
        </div>
        {/* Middle */}
        <div className="hidden sm:flex  gap-12">
          <div className="hidden lg:flex">
            <Navlinks className="gap-8 items-center text-xl font-['Oswald'] font-normal" />
          </div>
          <div className="flex items-center">
            <Searchbar />
          </div>
        </div>
        {/* End */}
        <div>
          {currentUser ? (
            "Logged in"
          ) : (
            <>
              <Button value="Sign Up" to="/signup" className="hidden lg:flex" />
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
