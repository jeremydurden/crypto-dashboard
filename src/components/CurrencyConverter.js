import ExchangeRateDisplay from "./ExchangeRateDisplay";
import TableRow from "./TableRow";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <TableRow text="Primary" currencies={currencies} />
            <TableRow text="Secondary" currencies={currencies} />
          </tbody>
        </table>
      </div>
      <ExchangeRateDisplay />
    </div>
  );
};
export default CurrencyConverter;
