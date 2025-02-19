import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  const starts = Array.from({ length: 5 }, (_, index) => index + 1 <= rating);
  console.log("star", starts);
  return (
    <div className="flex items-center gap-x-1">
      {starts.map((isFilled, i) => {
        const className = `w-3 h-3 ${
          isFilled ? "text-primary" : "text-grey-400"
        }`;
        return isFilled ? (
          <FaStar className={className} key={i} />
        ) : (
          <FaRegStar className={className} key={i} />
        );
      })}
    </div>
  );
};

export default Rating;
