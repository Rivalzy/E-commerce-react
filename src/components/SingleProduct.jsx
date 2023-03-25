import React from "react";
import { AiFillStar } from "react-icons/ai";
import Footer from "./Footer";
import Header from "./Header";
import Review from "./Review";

function SingleProduct() {
  return (
    <div>
      <Header />
      <section id="home" className="pt-6">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row-reverse justify-center">
            <div className="w-full self-start px-4 order-1">
              <div className="relative mt-10 lg:mt-9 ">
                <h1 className="mb-5 md:hidden text-5xl font-bold text-stone-800 md:text-xl lg:text-3xl">
                  Black Edition Nike
                </h1>
                <img
                  src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="sepatu olahraga"
                  classNamE="w-52 h-52 "
                />
                <p className=" hidden md:block font-medium text-slate-800 mb-10 leading-relaxed mt-5">
                  The radiance lives on in the Nike Air Force 1 '07, the b-ball
                  icon that puts a fresh spin on what you know best: crisp
                  leather, bold accents and the perfect amount of flash to make
                  you shine.
                </p>
              </div>
            </div>
            <div className="w-full self-start px-4 mt-7">
              <h1 className="hidden md:block text-5xl font-bold text-stone-800 md:text-xl lg:text-3xl">
                Black Edition Nike
              </h1>
              {/* Rate */}
              <div className="flex mt-3"> 
                <AiFillStar className="text-orange-300 w-6 h-6" />
                <AiFillStar className="text-orange-300 w-6 h-6" />
                <AiFillStar className="text-orange-300 w-6 h-6" />
                <AiFillStar className="text-orange-300 w-6 h-6" />
                <AiFillStar className="text-orange-300 w-6 h-6" />
              </div>
              <h4 className=" text-slate-800 text-lg mt-3 lg:text-2x1 ">
                $100
              </h4>
              <div className="my-6 grid grid-cols-3 gap-2">
                <div className="py-2 border-2 rounded-lg flex flex-col items-center justify-center hover:bg-white/40 cursor-pointer ">
                  <p>EU 36</p>
                </div>
                <div className="py-2 border-2 rounded-lg flex flex-col items-center justify-center hover:bg-white/40 cursor-pointer ">
                  <p>EU 37</p>
                </div>
                <div className="py-2 border-2 rounded-lg flex flex-col items-center justify-center hover:bg-white/40 cursor-pointer ">
                  <p>EU 38</p>
                </div>
                <div className="py-2 border-2 rounded-lg flex flex-col items-center justify-center hover:bg-white/40 cursor-pointer ">
                  <p>EU 39</p>
                </div>
                <div className="py-2 border-2 rounded-lg flex flex-col items-center justify-center hover:bg-white/40 cursor-pointer ">
                  <p>EU 40</p>
                </div>
                <div className="py-2 border-2 rounded-lg flex flex-col items-center justify-center hover:bg-white/40 cursor-pointer ">
                  <p>EU 41</p>
                </div>
              </div>
              <p className=" block md:hidden font-medium text-slate-800 mb-10 leading-relaxed mt-5">
                The radiance lives on in the Nike Air Force 1 '07, the b-ball
                icon that puts a fresh spin on what you know best: crisp
                leather, bold accents and the perfect amount of flash to make
                you shine.
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white bg-black py-3 px-8 rounded-full hover:shadow-lg hover:opacity-70 "
              >
                BUY
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid gap-5 justify-center mt-5 mb-10 lg:mt-0 ">
          <Review
            title="This is absolutely my favorite Air Force 1 now. Holy grail status now. It would be real dope if the laces had the Gold tips too."
            name="Syahrul"
          />
          <Review
            title="This is absolutely my favorite Air Force 1 now. Holy grail status now. It would be real dope if the laces had the Gold tips too."
            name="Rizky"
          />
          <Review
            title="This is absolutely my favorite Air Force 1 now. Holy grail status now. It would be real dope if the laces had the Gold tips too."
            name="Rusdi"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SingleProduct;
