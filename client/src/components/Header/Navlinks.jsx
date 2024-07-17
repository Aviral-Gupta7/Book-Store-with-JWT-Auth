import Links from "../Links/Links";

function Navlinks({ className }) {
  return (
    <>
      <ul className={`flex ${className}`}>
        <li>
          <Links to={"/"} value="Home" />
        </li>
        <li>
          <Links to={"/about"} value="About" />
        </li>
        <li>
          <Links to={"/store"} value="Store" />
        </li>
        <li>
          <Links to={"/contact"} value="Contact" />
        </li>
      </ul>
    </>
  );
}

export default Navlinks;
