import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFail,
} from "../../redux/user/userSlice";

function Signin() {
  const LinkHoverEffect =
    "relative before:content-[''] before:absolute before:h-[3px] before:w-0 before:right-0 before:left-0 before:bottom-0 before:bg-black hover:before:w-full before:transition-[width] duration-700 ease-in-out";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, error: errorMessages } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFail("Please fill out all fields."));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFail(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFail(error.message));
    }
  };

  return (
    <div className="bg-[#E9E9E9] min-h-screen py-8 px-4 flex items-center">
      <div className="bg-white w-full max-w-4xl mx-auto rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="w-full md:w-1/2 p-8">
            <div className="mb-8 text-center">
              <Link
                to="/"
                className="inline-block text-3xl md:text-4xl font-['Playwrite_HU'] text-[#1B1A17] font-semibold"
              >
                Books <span className="text-[#E45826]">Heaven</span>
              </Link>
            </div>
            <h2 className="text-2xl md:text-3xl uppercase text-center font-['Oswald'] tracking-wide mb-8">
              Your gateway to a world of literature.
            </h2>
            <div className="text-center mt-8">
              <p className="text-xl font-bold mb-4">Don't have an Account?</p>
              <Link
                to="/signup"
                className={`text-lg font-semibold ${LinkHoverEffect}`}
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 bg-[url('https://www.creativefabrica.com/wp-content/uploads/2021/10/29/Simple-Background-Design-Graphics-19387159-1.jpg')] bg-cover p-8">
            {errorMessages && (
              <div className="bg-white text-red-600 text-lg mb-6 p-4 rounded-xl shadow-xl">
                {errorMessages}
              </div>
            )}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Log In</h3>
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-1">
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    id="email"
                    type="email"
                    placeholder="user@mail.com"
                    className="w-full p-2 border-b-2 border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-medium block mb-1">
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.password}
                    id="password"
                    type="password"
                    placeholder="**********"
                    className="w-full p-2 border-b-2 border-black focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : "Log In"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;