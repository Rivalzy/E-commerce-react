import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="p-3">
        <Header />
      {/* HERO CONTENT 1 */}
      <div className="md:flex md:flex-row mt-5 bg-gradient-to-r from-zinc-200 to-slate-700">
        <div className="md:w-2/5 flex flex-col justify-center md:ml-20 px-5 items-center py-5">
          <h2 className="pb-4 text-5xl font-Kelly uppercase font-extrabold text-center md:self-start md:text-left">
            It all starts with looks.
          </h2>

          <p className="pb-2 font-bold font-Poppins text-2xl text-center md:self-start md:text-left">
            Starts from $190
          </p>
          <p className="font-Poppins text-center md:self-start md:text-left">
            Upgrade your style with the all new Athletic casual dark. The new,
            more sustainable 2023 Outfits. Challenge the status quo in the next
            generation of 2023.{" "}
          </p>
          <Link
            to="/productlist"
            className="bg-gradient-to-r from-black to to-zinc-500 text-zinc-200 rounded-full py-4 px-8 text-xl uppercase md:self-start my-5 hover:to-black font-Kelly"
          >
            Shop Now
          </Link>
        </div>
        <div className="md:w-3/5">
          <img
            src="/src/assets/images/image-product-1.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>

      {/* HERO CONTENT 2 */}

      <div className="md:flex md:flex-row mt-10 bg-gradient-to-r from-slate-700 to-zinc-200">
        <div className="md:w-3/5">
          <img
            src="/src/assets/images/image-product-2.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div class="md:w-2/5 flex flex-col justify-center md:ml-20 px-5 items-center py-5">
          <h2 className="pb-4 text-5xl font-Kelly uppercase font-extrabold text-center md:self-start md:text-left">
            It all starts with looks.
          </h2>
          <p className="pb-2 font-bold font-Poppins text-2xl text-center md:self-start md:text-left">
            Starts from $190
          </p>
          <p className="font-Poppins text-center md:self-start md:text-left">
            Upgrade your style with the all new Athletic casual dark. The new,
            more sustainable 2023 Outfits. Challenge the status quo in the next
            generation of 2023.{" "}
          </p>
          <button className="bg-gradient-to-r from-black to to-zinc-500 text-zinc-200 rounded-full py-4 px-8 text-xl uppercase md:self-start my-5 hover:to-black font-Kelly">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
