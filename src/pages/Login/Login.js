import React from "react";
import loginImage from "../../assets/Images/login.png";
import { MdEmail } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-10 min-h-[70vh]">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <img src={loginImage} alt="" className="w-[80%] mx-auto" />
          </div>
          <div className="w-[90%] sm:w-2/3 mx-auto">
            <form action="">
              <h3 className="text-3xl font-bold text-neutral">LogIn</h3>

              <div className="mt-10 text-neutral font-medium">
                <div className="mb-6 relative">
                  <span className="absolute bottom-2 text-neutral/80">
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1"
                    required
                  />
                </div>

                <div className="mb-2 relative">
                  <span className="absolute bottom-2 text-neutral/80">
                    <AiFillUnlock className="text-lg" />
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1"
                    required
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label className="label gap-2 justify-start items-center cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-xs" />
                    <span className="label-text">Remember me</span>
                  </label>

                  <div>
                    <Link
                      to=""
                      className="text-[13px] text-neutral-content underline hover:text-primary duration-300"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col w-full border-opacity-50">
                    <button
                      type="submit"
                      className="w-full py-2 font-bold text-neutral bg-primary rounded scale-[.98] hover:scale-[1] duration-300"
                    >
                      Log In
                    </button>
                    <div className="divider text-neutral/50">OR</div>
                    <Link
                      to="/signup"
                      className="text-center py-2 font-bold text-base-100 bg-gray-800 rounded scale-[.98] hover:scale-[1] duration-300"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
