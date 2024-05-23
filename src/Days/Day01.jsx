import React from "react";

const Day01 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-white min-h-[400px] min-w-[400px] flex flex-col justify-center items-center rounded-xl border-none bg-gradient-to-tr from-blue-800 to-green-300 shadow-black/90 shadow-xl">
        <div className="flex">
          <div className="relative mr-4 mt-1">
            <div className="absolute w-[20px] h-[40px] rounded-md bg-white rotate-45 mt-7 -left-4 z-0 custom-shadow-block"></div>
            <div className="absolute w-[20px] h-[85px] rounded-md bg-white mt-7 mr-1 z-20 custom-shadow-block"></div>
          </div>
          <p className="text-9xl font-bold z-10 custom-shadow">O</p>
          <p className="text-9xl font-bold -ml-6 custom-shadow">O</p>
        </div>
        <div>
          <p className="font-extrabold text-8xl tracking-[0px] custom-shadow">
            DAYS
          </p>
        </div>
        <div>
          <p className="text-2xl font-extrabold tracking-[5px] custom-shadow">
            CSS CHALLENGE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day01;
