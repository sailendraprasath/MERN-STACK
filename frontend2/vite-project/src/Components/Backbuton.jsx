import React from "react";
import { Link } from "react-router-dom";

const Backbuton = ({ destination = "/" }) => {
  return (
    <>
      <div className="flex">
        <button className="text-2xl">
          <Link
            to={destination}
            className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
          >
            Tap
          </Link>
        </button>
      </div>
    </>
  );
};

export default Backbuton;
