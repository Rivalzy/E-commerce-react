import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiFillProfile,
} from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaMale, FaFemale } from "react-icons/fa";
import { TbMoodKid } from "react-icons/tb";

const NavbarItem = ({ setNav }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-gradient-to-r from-zinc-400 to-gray-200  z-50 md:hidden flex justify-center items-center flex-col">
      <Link to="/">
        <img
          src="/src/assets/images/LOGO_AthleticInstinctNew.png"
          alt="profile"
          class="w-48 object-contain pb-4 hover:cursor-pointer"
        />{" "}
      </Link>
      <button
        onClick={() => {
          setNav(false);
        }}
      >
        {" "}
        <MdOutlineClose className="absolute top-5 right-10 w-7 h-7" />{" "}
      </button>
      <Link
        to="/"
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <FaMale size={20} />
        <span className="pl-4">Men</span>
      </Link>
      <a
        href=""
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <FaFemale size={20} />
        <span className="pl-4">Women</span>
      </a>
      <a
        href=""
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <TbMoodKid size={20} />
        <span className="pl-4">Kids</span>
      </a>
      <a
        href=""
        target="_blank"
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <AiOutlineShoppingCart size={20} />
        <span className="pl-4">Cart(0)</span>
      </a>
      <Link
        to="/login"
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <AiOutlineLogin size={20} />
        <span className="pl-4">Log In</span>
      </Link>
      <a
        href=""
        target="_blank"
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <AiFillProfile size={20} />
        <span className="pl-4">Sign Up</span>
      </a>
    </div>
  );
};

export default NavbarItem;
