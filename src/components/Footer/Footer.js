import React from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="py-10 bg-slate-900">
        <div className="w-[90%] xl:w-[1280px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-base-100">
            {/* About */}
            <div>
              <div className="flex gap-2 items-center mb-3">
                <img src={logo} alt="" className="w-10" />
                <h2 className="text-xl font-semibold ">JBOrganicFood</h2>
              </div>
              <p className="text-base-100/80 pr-10">
                JB Organic Foods is a Unique online foods shop. We provide all
                kinds of fresh and premium quality Dry Organic Foods. Trust and
                honesty is our goal. We maintain best Quality for our honorable
                customer.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xl font-semibold mb-2">Contact Us</p>
              <div className="flex items-center gap-2">
                <MdEmail />
                <p>jborganicfoods938@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <p>09613-905 605</p>
              </div>
            </div>

            {/* LEGAL */}
            <div>
              <p className="text-xl font-semibold mb-2">LEGAL</p>

              <ul className="list-disc pl-4">
                <li>
                  <Link
                    to="privacy"
                    className="hover:text-primary hover:underline  duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="terms"
                    className="hover:text-primary hover:underline  duration-200"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOLLOW US */}
            <div>
              <p className="text-xl font-semibold  mb-2">FOLLOW US</p>

              <div className="flex items-center gap-4 pr-4 text-4xl text-base-100/80">
                <Link
                  to="https://www.facebook.com/jborganicfoodsBD"
                  className="hover:text-blue-600 duration-200"
                >
                  <FaFacebook className="text-3xl" />
                </Link>
                <Link to="" className="hover:text-[#DE1F54] duration-200">
                  <AiFillInstagram />
                </Link>
                <Link to="" className="hover:text-blue-700 duration-200">
                  <AiFillTwitterCircle />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full h-px bg-gradient-to-l from-slate-800 via-slate-500 to-slate-800"></div>

      <div className="bg-slate-900 text-center font-semibold py-5 text-base-100">
        <p>
          Copyright © 2023 - JB Organic Foods | Developed By{" "}
          <span className="font-bold">Nasim Uddin</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
