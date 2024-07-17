import Navlinks from "./Navlinks";
import Button from "./Button";

function HamMenu({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "flex lg:hidden" : "hidden"
      } flex-col  items-center gap-4`}
    >
      <Navlinks className="flex-col items-center text-xl font-['Oswald'] font-normal gap-4" />
      <Button
        value="Sign Up"
        to="/signup"
        className="text-center w-2/6 min-w-[100px]
        "
      />
    </div>
  );
}

export default HamMenu;
