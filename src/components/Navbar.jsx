import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bag from "../assets/bag.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center py-7 mx-auto">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-black"
                    : "text-black text-opacity"
                } fonrt-poppins font-medium cursor-pointer text-[16px]
              hover:text-black text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className="flex items-center gap-2 "
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-black text-[18px] font-bold cursor-pointer flex">
              shoppe
            </p>
          </Link>
        </div>

        <div>
          <ul className="list-none hidden sm:flex flex-row gap-10 justify-center items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-black"
                    : "text-black text-opacity-50"
                }
              hover:text-black text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li>
              <img
                src={bag}
                alt="bag"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
