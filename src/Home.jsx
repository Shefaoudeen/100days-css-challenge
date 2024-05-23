import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-blue-500 via-indigo-600 to-indigo-900">
      <div className="text-2xl font-bold text-white">
        <p className="">100 Days of Coding Challenge CSS</p>
      </div>
      <div className="mt-10">
        <Link to="/day1">
          <button className="border border-black px-7 py-5  rounded-xl shadow-2xl bg-gradient-to-tr from-white to-gray-400">
            <p className=" font-bold">DAY - 01</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
