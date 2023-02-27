import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/Images/error-500.png";

const ErrorPage = () => {
  return (
    <div className="py-10 min-h-[70vh] flex justify-center items-center">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h3 className="text-6xl font-bold text-gradient">Error 400</h3>
            <h3 className="text-3xl font-bold text-neutral-content/90 mt-2">
              Page Not Found
            </h3>
            <p className="text-lg my-4 text-neutral-content">
              It looks like nothing was found at this location. Maybe try one of
              the links below or a sear
            </p>

            <Link
              to="/"
              className="px-6 py-2 font-bold bg-primary/90 text-light rounded scale-[.98] hover:scale-[1] duration-200"
            >
              Go to Home
            </Link>
          </div>
          <div>
            <img src={errorImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
