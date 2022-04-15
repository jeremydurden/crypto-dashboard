import { useState } from "react";
import axios from "axios";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import TableRow from "./TableRow";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangePrimaryCurrency = (e) => {
    setChosenPrimaryCurrency(e.target.value);
  };
  const handleChangeSecondaryCurrency = (e) => {
    setChosenSecondaryCurrency(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": "14a94c5f2emshc41d3fbc00ee7e3p1d21c3jsnd9be15a45100",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(chosenPrimaryCurrency);
  console.log(chosenSecondaryCurrency);
  console.log("exchangeRate", exchangeRate);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <TableRow
              amount={amount}
              text="Primary"
              currencies={currencies}
              handleChangeCurrency={handleChangePrimaryCurrency}
              handleChangeAmout={handleChangeAmount}
              value={chosenPrimaryCurrency}
              name="currency-option-1"
            />
            <TableRow
              disabled={true}
              amount={result}
              text="Secondary"
              currencies={currencies}
              handleChangeCurrency={handleChangeSecondaryCurrency}
              value={chosenSecondaryCurrency}
              name="currency-option-2"
            />
          </tbody>
        </table>
        <button className="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
      <ExchangeRateDisplay />
    </div>
  );
};
export default CurrencyConverter;
