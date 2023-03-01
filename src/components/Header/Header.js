import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import {
  MdEmail,
  MdOutlineAddShoppingCart,
  MdWifiCalling1,
} from "react-icons/md";
import { BsFacebook, BsThreeDotsVertical } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineLogin,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { UseContext } from "../../ContextApi/ContextProvider";
import Categories from "./Categories";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [categories, setCategories] = useState(false);
  const [mobileSearchBox, setMobileSearchBox] = useState(false);

  const { cart } = UseContext();
  const subTotal = cart.reduce(
    (price, item) => price + item.quantity * parseInt(item.price),
    0
  );

  return (
    <>
      {/* Top Header */}
      <div className="bg-primary py-2 text-neutral">
        <div className="w-[90%] xl:w-[1280px] mx-auto">
          <div className="sm:flex justify-between items-center">
            <div className="hidden sm:flex gap-6 items-center font-medium">
              <div className="flex gap-1 items-center">
                <MdWifiCalling1 />
                <p>09613-905 605</p>
              </div>
              <div className="flex gap-1 items-center">
                <MdEmail />
                <p>jborganicfoods938@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-xl">
              <div className="flex items-center gap-4 pr-4">
                <Link to="" className="hover:text-blue-600 duration-200">
                  <BsFacebook className="text-base" />
                </Link>
                <Link to="" className="hover:text-[#DE1F54] duration-200">
                  <AiFillInstagram />
                </Link>
                <Link to="" className="hover:text-blue-700 duration-200">
                  <AiFillTwitterCircle />
                </Link>
              </div>

              <div className="sm:border-l border-neutral pl-4">
                <Link
                  to="login"
                  className="text-base flex  gap-1 items-center font-semibold hover:opacity-80 duration-100"
                >
                  <AiOutlineLogin />
                  <p>Login</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 py-2 bg-slate-100 border-b">
        <div className="w-[90%] xl:w-[1280px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-1/4">
              <Link to="/" className="inline-block">
                <img src={logo} alt="" className="w-16 md:w-20" />
              </Link>
            </div>

            <div className="md:w-3/4 flex gap-4 items-center">
              <div className="hidden md:block relative w-full">
                <input
                  type="search"
                  name=""
                  placeholder="Search Product..."
                  className="w-full pr-12 border border-primary outline-none px-4 py-2 rounded-full text-neutral font-medium"
                />
                <button className="absolute top-[3px] right-1 bg-primary p-2 rounded-full text-neutral text-xl hover:bg-opacity-80 duration-200">
                  <BiSearchAlt2 />
                </button>
              </div>

              <div className="flex gap-4 items-center">
                <Link
                  to="wishlist"
                  className="relative inline-flex items-center bg-primary hover:bg-opacity-80 duration-200 p-2 rounded-full text-neutral text-xl"
                >
                  <AiOutlineHeart />
                </Link>

                <div className="flex items-end">
                  <Link
                    to="cart"
                    className="relative inline-flex items-center bg-primary hover:bg-opacity-80 duration-200 p-2 rounded-full text-neutral text-xl"
                  >
                    <MdOutlineAddShoppingCart />

                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-base-100 bg-neutral rounded-full -top-3 -right-2 ">
                      {cart?.length}
                    </div>
                  </Link>
                  <h2 className="font-semibold pl-2 text-xl">
                    $<span>{subTotal}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu */}
      <div className="text-neutral shadow relative">
        <div className="w-[90%] xl:w-[1280px] mx-auto">
          <div className="flex items-center justify-between gap-6 lg:gap-10 uppercase ">
            {/* Category */}
            <div className="relative">
              <button
                onClick={() => setCategories(!categories)}
                className="w-max sm:w-48 lg:w-60 flex justify-between items-center bg-primary/80 p-3 hover:bg-primary duration-200 font-medium rounded"
              >
                <h2 className="uppercase hidden sm:block">Categories</h2>
                <AiOutlineMenu className="text-xl" />
              </button>

              {categories && (
                <div className="absolute z-20 top-full bg-gray-100 w-48 md:w-full shadow-lg rounded">
                  <Categories />
                </div>
              )}
            </div>

            {/* Mobile Menu and Search button*/}
            <div className="md:hidden flex items-center gap-4 relative">
              <div>
                <button
                  onClick={() => setMobileSearchBox(!mobileSearchBox)}
                  className="bg-primary p-2 rounded-full text-neutral text-xl hover:bg-opacity-80 duration-200"
                >
                  <BiSearchAlt2 />
                </button>

                <div
                  className={`absolute z-30 sm:w-96 w-64 right-0 top-[112%] transform duration-500 ${
                    mobileSearchBox
                      ? "translate-y-0 opacity-1 visible"
                      : "translate-y-2 opacity-0 invisible"
                  }`}
                >
                  <input
                    type="search"
                    name=""
                    placeholder="Search Product..."
                    className="w-full pr-12 border border-primary outline-none px-4 py-2 rounded-full text-neutral font-medium"
                  />
                  <button className="absolute top-[3px] right-1 p-2 rounded-full text-neutral text-xl">
                    <BiSearchAlt2 />
                  </button>
                </div>
              </div>

              <button>
                <BsThreeDotsVertical
                  className="text-xl"
                  onClick={() => setMenuToggle(!menuToggle)}
                />
              </button>
            </div>

            {/* Menu */}
            <nav className={`nav  ${menuToggle ? "navShow z-40" : null}`}>
              <ul className="md:flex gap-10 items-center font-semibold">
                <li>
                  <NavLink
                    to="/"
                    className="hover:text-primary "
                    onClick={() => setMenuToggle(!menuToggle)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className="hover:text-primary"
                    onClick={() => setMenuToggle(!menuToggle)}
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className="hover:text-primary"
                    onClick={() => setMenuToggle(!menuToggle)}
                  >
                    Faq
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactUs"
                    className="hover:text-primary"
                    onClick={() => setMenuToggle(!menuToggle)}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
