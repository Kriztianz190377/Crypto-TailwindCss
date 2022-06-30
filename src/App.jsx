import { useEffect, useState } from "react";
import { Form } from "./component/Form";
import Result from "./component/Result";
import Spinner from "./component/Spinner";
import Title from "./component/Title";

function App() {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const quoteCripto = async () => {
        setSpinner(true);
        setResult({});
        const { coin, cryptoCurrency } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${coin}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result.DISPLAY[cryptoCurrency][coin]);
        setShowResult(true);
        setSpinner(false);
      };
      quoteCripto();
    }
  }, [coins]);

  return (
    <div className="bg-gray-500 ">
      <div className="bg-img min-h-screen ">
        <div className=" w-full h-auto mx-auto">
          <div
            className="w-[90%] max-w[900px]  pt-20 mx-auto text-center first-letter 
        flex flex-col  justify-center items-center  gap-10
        "
          >
            <Title/>
            
            <Form setCoins={setCoins} />

            {spinner && <Spinner />}
            {showResult && <Result result={result} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
