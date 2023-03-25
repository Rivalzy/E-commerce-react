import React from "react";
import Footer from "./Footer";

const Subscribe = () => {
  return (
    <div className="p-3">
      <div class="rounded-lg shadow-lg my-20 flex flex-row">
        <div class="lg:w-3/5 w-full bg-gradient-to-r from-black to-zinc-700 lg:from-black lg:via-zinc-700 lg:to-transparent rounded-lg text-gray-100 p-12">
          <div class="lg:w-1/2">
            <h3 class="text-2xl font-extrabold mb-4">
              Subscribe to get our offers first
            </h3>
            <p class="mb-4 leading-relaxed">
              Want to hear from us when we have new offers? Sign up for our
              newsletter and we'll email you every time we have new sale offers.
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter email address"
                class="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"
              />
              <button
                type="submit"
                class="bg-red-600 py-3 rounded-lg w-full hover:bg-gradient-to-r from-zinc-400 to-red-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
          <img
            src="/src/assets/images/subscribe-banner.png"
            class="h-96"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscribe;
