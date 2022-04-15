import { useState } from "react";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import TableRow from "./TableRow";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");

  const handleChangePrimaryCurrency = (e) => {
    setChosenPrimaryCurrency(e.target.value);
  };
  const handleChangeSecondaryCurrency = (e) => {
    setChosenSecondaryCurrency(e.target.value);
  };

  console.log(chosenPrimaryCurrency);
  console.log(chosenSecondaryCurrency);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <TableRow
              text="Primary"
              currencies={currencies}
              handleChangeCurrency={handleChangePrimaryCurrency}
              value={chosenPrimaryCurrency}
              name="currency-option-1"
            />
            <TableRow
              text="Secondary"
              currencies={currencies}
              handleChangeCurrency={handleChangeSecondaryCurrency}
              value={chosenSecondaryCurrency}
              name="currency-option-2"
            />
          </tbody>
        </table>
      </div>
      <ExchangeRateDisplay />
    </div>
  );
};
export default CurrencyConverter;
