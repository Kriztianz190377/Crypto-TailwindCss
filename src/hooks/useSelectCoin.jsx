import React, { useState } from "react";

const useSelectCoin = (label, coins) => {
  const [state, setState] = useState('');

  const SelectCoins = () => (
    <div
      className=" w-[100%] flex flex-col items-start 
    lg:w-[80%]  md:w-[110%]"
    >
      <label
        className="text-[#fff] text-3xl font-semibold  pt-10 py-4
      md:py-4"
      >
        {label}
      </label>

      <select
        className="w-full text-3xl font-bold my-2 py-2
      rounded-md
      "
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option>Select</option>

        {coins.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>
    </div>
  );

  return [state, SelectCoins];
};

export default useSelectCoin;
