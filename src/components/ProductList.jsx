import React from "react";
import image from "../assets/images/image-product-1.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

function ProductList() {
  return (
    <div>
      <Header />
      <section className="mt-7">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap">
            <div className="w-full" data-aos="fade-up">
              <h5 className="font-light text-xl mb-4">All Categories</h5>
            </div>
          </div>
          <div className="flex flex-wrap">
            <Link
              to="/productlist/:id"
              className="w-1/2 md:w-1/4 pr-4 pl-4 lg:w-1/6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="bg-slate-100 rounded-lg pt-7 px-7 pb-2 mb-5 ease-in-out duration-200 hover:scale-105 block">
                <div className="categories-image">
                  <img
                    src={image}
                    alt="Sneaker Categories"
                    className="w-full"
                  />
                </div>
                <p className="text-center text-lg font-normal mt-3 mb-2 text-gray-900">
                  Sneaker
                </p>
              </p>
            </Link>
            <Link
              to="/productlist/:id"
              className="w-1/2 md:w-1/4 pr-4 pl-4 lg:w-1/6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p
                className="bg-slate-100 rounded-lg pt-7 px-7 pb-2 mb-5 ease-in-out duration-200 hover:scale-105 block"
                href="#"
              >
                <div className="categories-image">
                  <img
                    src={image}
                    alt="Sneaker Categories"
                    className="w-full"
                  />
                </div>
                <p className="text-center text-lg font-normal mt-3 mb-2 text-gray-900">
                  Sneaker
                </p>
              </p>
            </Link>
            <div
              className="w-1/2 md:w-1/4 pr-4 pl-4 lg:w-1/6 "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p
                className="bg-slate-100 rounded-lg pt-7 px-7 pb-2 mb-5 ease-in-out duration-200 hover:scale-105 block"
                href="#"
              >
                <div className="categories-image">
                  <img
                    src={image}
                    alt="Sneaker Categories"
                    className="w-full"
                  />
                </div>
                <p className="text-center text-lg font-normal mt-3 mb-2 text-gray-900">
                  Sneaker
                </p>
              </p>
            </div>
            <div
              className="w-1/2 md:w-1/4 pr-4 pl-4 lg:w-1/6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p
                className="bg-slate-100 rounded-lg pt-7 px-7 pb-2 mb-5 ease-in-out duration-200 hover:scale-105 block"
                href="#"
              >
                <div className="categories-image">
                  <img
                    src={image}
                    alt="Sneaker Categories"
                    className="w-full"
                  />
                </div>
                <p className="text-center text-lg font-normal mt-3 mb-2 text-gray-900">
                  Sneaker
                </p>
              </p>
            </div>
            <div
              className="w-1/2 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p
                className="bg-slate-100 rounded-lg pt-7 px-7 pb-2 mb-5 ease-in-out duration-200 hover:scale-105 block"
                href="#"
              >
                <div className="categories-image">
                  <img
                    src={image}
                    alt="Sneaker Categories"
                    className="w-full"
                  />
                </div>
                <p className="text-center text-lg font-normal mt-3 mb-2 text-gray-900">
                  Sneaker
                </p>
              </p>
            </div>
            <div
              className="w-1/2 md:w-1/4 lg:w-1/6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p
                className="bg-slate-100 rounded-lg pt-7 px-7 pb-2 mb-5 ease-in-out duration-200 hover:scale-105 block"
                href="#"
              >
                <div className="categories-image">
                  <img
                    src={image}
                    alt="Sneaker Categories"
                    className="w-full"
                  />
                </div>
                <p className="text-center text-lg font-normal mt-3 mb-2 text-gray-900">
                  Sneaker
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductList;
