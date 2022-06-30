import React from "react";

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE } = result;
  return (
    <div
      className="md:w-[80%]  w-full text-white bg-[#053023] mt-5 capitalize
      hover:bg-[#065b41] hover:bg-opacity-75 duration-300 mb-10 
      flex flex-col-reverse items- justify-center text-2xl bg-opacity-75
      lg:flex-row 
      lg:mt-0"
    >
      <img className="mx-1" src={`https://www.cryptocompare.com/${IMAGEURL}`} />

      <div
        className="opacity-100 py-6  
      
      "
      >
        <p className="text-4xl font-semibold">
          the price is: &nbsp;
          <span className="text-5xl font-bold text-red-600 hover:text-red-800 duration-300">
            {PRICE}
          </span>
        </p>
        <p className="text-lg lg:text-2xl   mt-2">
          the highest price of the day: &nbsp;{" "}
          <span className="inline-block"> {HIGHDAY}</span>
        </p>
        <p className="text-lg lg:text-2xl mt-2">
          the lowest price of the day: &nbsp;{" "}
          <span className="inline-block"> {LOWDAY}</span>
        </p>
        <p className="text-lg lg:text-2xl mt-2">
          variation last 24 hours: &nbsp;{" "}
          <span className="inline-block">{CHANGE24HOUR}</span>
        </p>
        <p className="text-lg lg:text-2xl mt-2">
          last update: &nbsp; <span className="inline-block">{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
