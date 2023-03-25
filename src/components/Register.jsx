import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisImg from "../assets/images/Jogging.jpg";

const Register = () => {

  // agar tidak refesh saat klik button
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
      <div className="hidden sm:block">
        <img
          src={RegisImg}
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="bg-slate-200 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-neutral-900 p-8 rounded-lg shadow-2xl shadow-black my-10">
          <Link to="/" class="text-slate-300 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mt-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </Link>
          <h3 className="text-4xl text-white  font-bold text-center font-Poppins">
            Register
          </h3>
          <div className="flex flex-col text-white/70 py-2 font-Kelly">
            <label>Your Name</label>
            <input
              className="rounder-lg bg-gray-500 mt-2 p-2 focus:border-blue focus:bg-neutral-700 focus:outline-none"
              placeholder="Your Name"
              type="text"
              name="YourName"
              required
            />
          </div>
          <div className="flex flex-col text-white/70 py-2 font-Kelly">
            <label>Email</label>
            <input
              className="rounder-lg bg-gray-500 mt-2 p-2 focus:border-blue focus:bg-neutral-700 focus:outline-none"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col text-white/70 py-2 font-Kelly">
            <label>Password</label>
            <input
              className="rounder-lg bg-gray-500 mt-2 p-2 focus:border-blue focus:bg-neutral-700 focus:outline-none"
              placeholder="Password"
              type="password"
              name="password"
              minLength= '8'
              required
            />
          </div>
          <div className="flex flex-col text-white/70 py-2 font-Kelly">
            <label>Confirm Password</label>
            <input
              className="rounder-lg bg-gray-500 mt-2 p-2 focus:border-blue focus:bg-neutral-700 focus:outline-none"
              placeholder="Confirm Password"
              type="password"
              name="confirmpassword"
              minLength= '8'
              required
            />
          </div>
          <input
            type="checkbox"
            className="border border-gray-400 cursor-pointer"
          />
          <span class="items-center text-white ml-2">
            I accept the{" "}
            <a href="#" className="text-blue-600 font-semibold">
              Term of use
            </a>{" "}
            &{" "}
            <a href="#" class="text-blue-600 font-semibold">
              Privacy Policy
            </a>
          </span>
          <div class="mt-5">
            <button
              // onClick={handleFormSubmit}
              className="w-full py-2 bg-white text-center rounded-md text-black text-lg font-semibold hover:bg-black hover:text-white hover:border-2 hover:border-slate-400 shadow-lg duration-200 ease-in-out mb-5"
            >
              Create Account
            </button>
            <span className="flex justify-center text-white font-Poppins">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-slate-400 ml-2 font-semibold hover:text-white hover:font-bold font-Poppins"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
