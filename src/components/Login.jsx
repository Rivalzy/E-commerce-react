import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div className="flex rounded-lg shadow-2xl sm:w-10/12 max-w-2xl mx-auto border border-gray-200">
        {/* image */}
        <div
          className="w-1/2 hidden sm:block bg-cover rounded-l-lg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        ></div>
        {/* form */}
        <div className="sm:w-1/2 p-8">
          <h2 className="font-bold text-xl">Login</h2>
          <p className="text-sm mt-2">Log in to your account to continue</p>
          <form className="flex flex-col gap-5">
            <input
              className="p-1 mt-4 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="p-1 rounded-xl w-full border"
              type="password"
              name="password"
              placeholder="Password"
              minLength="8"
              required
            />
            <div className="flex items-center gap-1">
              <input type="checkbox" id="keep-login" />{" "}
              <label htmlFor="keep-login" className="text-sm text-gray-500">
                Keep me logged in
              </label>
            </div>
            <button className="bg-black text-white py-2">Log In</button>
          </form>
          <a href="#" className="text-xs block mt-3 text-gray-500">
            Forgot your password?
          </a>
          <div className="w-full border-b-[1px] border-gray-500 my-2"></div>
          <div className="flex justify-between w-full gap-3">
            <p className="text-xs text-gray-500">Not joined yet?</p>
            <Link
              className="text-xs text-gray-500 font-bold"
              to="/register"
            >
              Create your account here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
