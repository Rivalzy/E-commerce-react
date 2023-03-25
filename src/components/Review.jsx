import React from "react";
import { AiFillStar } from "react-icons/ai";

function Review({ title, name }) {
  return (
    <div>
      <div className="flex items-center mb-3 gap-1">
        <h1 className="font-semibold text-lg">{name}</h1>
        <div className="flex ">
          <AiFillStar className="text-orange-300 w-6 h-5" />
          <AiFillStar className="text-orange-300 w-6 h-5" />
          <AiFillStar className="text-orange-300 w-6 h-5" />
          <AiFillStar className="text-orange-300 w-6 h-5" />
          <AiFillStar className="text-orange-300 w-6 h-5" />
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  );
}

export default Review;
