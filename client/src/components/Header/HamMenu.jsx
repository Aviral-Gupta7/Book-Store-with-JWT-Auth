import Navlinks from "./Navlinks";
import Button from "./Button";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";

function HamMenu({ isOpen }) {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div
      className={`${
        isOpen ? "flex lg:hidden" : "hidden"
      } flex-col  items-center gap-4 border-gray-400 border-b-2 pb-4`}
    >
      <Navlinks className="flex-col items-center text-xl font-['Oswald'] font-normal gap-4" />
      {currentUser ? (
        <UserMenu />
      ) : (
        <Button
          value="Sign Up"
          to="/signup"
          className="text-center w-2/6 min-w-[100px] max-w-[150px]
        "
        />
      )}
    </div>
  );
}

export default HamMenu;
