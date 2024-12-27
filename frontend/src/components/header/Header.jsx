import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import "./header.css";
import { BiSolidUser, BiSolidHelpCircle } from "react-icons/bi";
import { FaBox, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoCart, IoMenu } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { navLinks } from "../../../data";

function Header() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleDropdown = () => setAccountOpen(!accountOpen);
  const toggleMobileNav = () => setMobileNav(!mobileNav);

  return (
    <div className="header__section w-full">
      {/* Desktop Header */}
      <div className="desktop__header hidden md:flex">
        <div className="header__wrapper w-4/5 flex justify-between mx-auto mt-5">
          <div className="header__content flex justify-between w-full">
            {/* Logo */}
            <Link to="/" className="w-2/4">
              <div className="header__logo ">
                <h2 className="text-3xl font-bold text-customDark-900">
                  Realty<span className="!text-customRed-600">Mart</span>
                </h2>
              </div>
            </Link>
            {/* Search Bar */}
            <div className="header__search w-full">
              <form>
                <div className="search__wrapper w-4/5 flex gap-3 items-center">
                  <div className="search flex items-center w-full bg-white rounded-lg border border-gray-500 text-2xl px-5 text-customDark-500">
                    <IoIosSearch className="text-customDark-500" />
                    <input
                      type="search"
                      placeholder="Search Products, Brands and Categories"
                      className="focus:outline-none w-full py-3"
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
            {/* Account and Cart */}
            <div className="account__system w-2/5 flex items-center justify-between gap-5">
              <div className="account flex flex-col relative">
                <div
                  className="account__button flex bg-customDark-200 px-5 py-3 items-center gap-2 rounded-md text-xl text-customDark-900 hover:bg-customRed-600 hover:text-white cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <BiSolidUser />
                  <span>Account</span>
                  {accountOpen ? <FaCaretUp /> : <FaCaretDown />}
                </div>
                {accountOpen && (
                  <ul className="dropdown-menu flex flex-col bg-white py-5 rounded-md absolute top-14 text-xl shadow-lg">
                    <li className="list-none flex gap-2 px-5 py-2 bg-customYellow-500 hover:bg-customYellow-600">
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

      {/* Mobile Header */}
      <div className="mobile__header md:hidden w-full">
        <div className="mobileheader__wrapper flex flex-col w-11/12 mx-auto p-2">
          <div className="mobileheader__top flex justify-between items-center">
            <div className="logo__nav flex gap-3 text-2xl items-center font-bold">
              <div
                className="nav text-2xl hover:text-customRed-700 cursor-pointer"
                onClick={toggleMobileNav}
              >
                <IoMenu />
              </div>
              <div className="logoMobile">
                <Link to="/">
                  Realty<span className="text-customRed-500">Mart</span>
                </Link>
              </div>
            </div>
            <div className="accounts__cart flex gap-2 text-2xl items-center hover:text-customRed-700">
              <div className="mobile__accounts">
                <HiUserCircle />
              </div>
              <div className="mobile__carts">
                <BsCart3 />
              </div>
            </div>
          </div>
          {mobileNav && (
            <div className="mobileNav absolute top-10 left-0 right-20 flex flex-col mt-2 bg-white shadow-md rounded-md z-10">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="navlink flex items-center gap-3 p-3 text-lg hover:bg-customRed-100"
                >
                  {React.createElement(link.icon)}
                  {link.name}
                </Link>
              ))}
            </div>
          )}
          <div className="mobileheader__bottom">
            <div className="input w-full border border-customRed-600 mt-3 rounded-full flex items-center">
              <IoSearchOutline className="ml-3 text-lg" />
              <input
                type="text"
                placeholder="Search Products, Brands and Categories..."
                className="w-full mr-3 text-sm rounded-full border-none bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
