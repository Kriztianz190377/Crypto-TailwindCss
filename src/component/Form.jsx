import React, { useEffect, useState } from "react";
import useSelectCoin from "../hooks/useSelectCoin";
import { coins } from "../data/dataCoins.js";
import Error from "./Error";

export const Form = ({setCoins}) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [coin, SelectCoins] = useSelectCoin("Choose Your Coin", coins);

  const [cryptoCurrency, SelectCryptoCurrency] = useSelectCoin(
    "Choose Your Cryptocurrency", cryptos );

  useEffect(() => {
    const consultAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();
      const arrayCryptos = result.Data.map((crypto) => {
        const object = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return object;
      });
      setCryptos(arrayCryptos);
    };
    consultAPI();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if ([coin, cryptoCurrency].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setCoins({
      coin,
      cryptoCurrency,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form
        className=" w-[80%]  flex flex-col justify-center items-center
        md:w-[50%]"
        onSubmit={handleSubmit}
      >
        <SelectCoins />
        <SelectCryptoCurrency />
        <input
          className="w-[80%] bg-[#053023] text-white text-2xl font-semibold border-none  
        rounded-md p-2  mt-6 uppercase cursor-pointer
        hover:bg-[#065b41] duration-300"
          type="submit"
          value="Estimate"
        />
      </form>
    </>
  );
};
