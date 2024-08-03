import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    profilePhoto: currentUser.profilePhoto,
    username: currentUser.username,
    email: currentUser.email,
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      formData.username === "" ||
      formData.email === ""
    ) {
      return alert("Please fill out all fields.");
    }

    if (
      formData.profilePhoto === currentUser.profilePhoto &&
      formData.username === currentUser.username &&
      formData.email === currentUser.email &&
      formData.password === ""
    ) {
      return alert("No changes detected");
    }
    if (formData.password === "") {
      setFormData({ ...formData, password: currentUser.password });
    }
    try {
      const res = await fetch(`/api/user/update${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return console.log(fail);
      }
      if (res.ok) {
        return navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <div>
        <img
          src={currentUser.profilePhoto}
          alt="pfp"
          className="border-2 border-black rounded-full overflow-hidden w-[100px] mx-auto my-4 cursor-pointer"
        />
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center text-left"
        >
          <div className="flex flex-col my-2 gap-1 min-w-[200px]  w-[400px]">
            <label className="" htmlFor="password">
              Username :{" "}
            </label>
            <input
              id="username"
              type="text"
              className="border-2 border-gray-600 rounded-md px-2 py-1"
              value={formData.username}
              placeholder="username"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col my-2 gap-1 min-w-[200px]  w-[400px]">
            <label className="" htmlFor="password">
              Email :{" "}
            </label>
            <input
              id="email"
              type="email"
              className="border-2 border-gray-600 rounded-md  px-2 py-1 "
              value={formData.email}
              placeholder="Email"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col my-2 gap-1 min-w-[200px] w-[400px]">
            <label className=" " htmlFor="password">
              Password :{" "}
            </label>
            <input
              id="password"
              type="password"
              className="border-2 border-gray-600 rounded-md px-2 py-1"
              placeholder="Password"
              value={formData.password}
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="items-center border-2 border-gray-500 py-2 px-5  font-['Oswald'] text-xl rounded-xl hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out my-8"
          >
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
