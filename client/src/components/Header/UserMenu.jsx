import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function UserMenu() {
  const { profilePhoto } = useSelector((state) => state.user.currentUser);
  return (
    <>
      <NavLink
        className={`w-[50px] h-[50px] mr-4 border-black border-2 rounded-full overflow-hidden`}
        to="/dashboard"
      >
        <img
          src={
            profilePhoto ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="pfp"
        />
      </NavLink>
    </>
  );
}

export default UserMenu;
