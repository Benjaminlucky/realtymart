import React from "react";
import { navLinks } from "../../../data";
import { Link } from "react-router-dom";

function Desktopnav() {
  return (
    <div className="desktopnav__section w-2/12 hidden lg:block">
      <div className="desktopnav__wrapper flex w-full ">
        <div className="nav flex flex-col w-full">
          {navLinks.map((nav, index) => (
            <Link
              to={nav.link}
              key={index}
              className="flex items-center  gap-3 p-2 !pl-0 text-xl text-gray-700 hover:bg-customRed-200 hover:!pl-2 transition-all"
            >
              {React.createElement(nav.icon)}
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Desktopnav;
