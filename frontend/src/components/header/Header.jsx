import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "./header.css";
import { BiSolidUser } from "react-icons/bi";
import { FaBox } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

function Header() {
  const [accountOpen, setAccountOpen] = useState(false);

  const toggleDropdown = () => {
    setAccountOpen(!accountOpen);
  };

  return (
    <div className="header__section w-full">
      <div className="header__wrapper w-4/5 flex justify-between  mx-auto mt-5">
        <div className="header__content flex justify-between w-full">
          {/* Logo */}
          <div className="header__logo w-2/4">
            <h2 className="text-3xl font-bold text-customDark-900">
              Realty<span className="!text-customRed-600">Mart</span>
            </h2>
          </div>
          {/* Search Bar */}
          <div className="header__search w-full">
            <form action="">
              <div className="search__wrapper w-4/5 flex gap-3 items-center">
                <div className="search flex items-center w-full  bg-white  rounded-lg border border-gray-500 text-2xl px-5 text-customDark-500 ">
                  <IoIosSearch className="text-customDark-500" />
                  <input
                    type="search"
                    placeholder="Search Products, Brands and Categories"
                    className="focus:outline-none focus:ring-0 focus:border-none border-none w-full focus:border-transparent py-3 "
                  />
                </div>
                <button
                  type="submit"
                  className="bg-customRed-600 px-5 py-3 text-white rounded-md text-lg hover:bg-customRed-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="account__system w-2/5 flex items-center justify-between gap-5">
            <div className="account  flex flex-col">
              <div
                className="account__button flex bg-customDark-200 px-5 py-3 items-center gap-2 rounded-md text-xl text-customDark-900 hover:bg-customRed-600 hover:text-white"
                onClick={toggleDropdown}
              >
                <BiSolidUser />
                <button className="">Account</button>
                {accountOpen ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              {accountOpen && (
                <ul className="flex flex-col  bg-white py-5 rounded-sm absolute top-24 text-xl text-center shadow-lg">
                  <li className="list-none flex gap-2 px-5 text-center justify-center py-2 bg-customYellow-500 hover:bg-customYellow-600">
                    Sign In
                  </li>
                  <li className="flex list-none items-center px-5 py-2 gap-2 hover:bg-customDark-100">
                    <BiSolidUser />
                    My Account
                  </li>
                  <li className="flex list-none items-center px-5 py-2 gap-2 hover:bg-customDark-100">
                    <FaBox />
                    Orders
                  </li>
                  <li className="flex list-none items-center px-5 py-2 gap-2 hover:bg-customDark-100">
                    <FcLike />
                    Saved Items
                  </li>
                </ul>
              )}
            </div>
            <div className="help flex items-center text-xl gap-2 text-customDark-500 hover:text-customRed-500">
              <BiSolidHelpCircle />
              Help
            </div>
            <div className="cart flex items-center text-xl gap-2 text-customDark-500 hover:text-customRed-500">
              <IoCart />
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
