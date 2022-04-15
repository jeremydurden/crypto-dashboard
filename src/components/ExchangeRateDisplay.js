const ExchangeRateDisplay = ({
  exchangeRate,
  chosenPrimaryCurrency,
  chosenSecondaryCurrency,
  result,
}) => {
  let c1 = "";
  let c2 = "";
  const helper = (currencyOne, currencyTwo) => {
    if (currencyOne === "BTC") {
      c1 = "Bitcoin";
    }
    if (currencyOne === "ETH") {
      c1 = "Ethereum";
    }
    if (currencyOne === "XRP") {
      c1 = "Ripple";
    }
    if (currencyOne === "USD") {
      c1 = "U.S. Dollar";
    }
    if (currencyOne === "LTC") {
      c1 = "Litecoin";
    }
    if (currencyOne === "ADA") {
      c1 = "Cardano";
    }
    if (currencyTwo === "BTC") {
      c2 = "Bitcoin";
    }
    if (currencyTwo === "ETH") {
      c2 = "Ethereum";
    }
    if (currencyTwo === "XRP") {
      c2 = "Ripple";
    }
    if (currencyTwo === "USD") {
      c2 = "U.S. Dollars";
    }
    if (currencyTwo === "LTC") {
      c2 = "Litecoin";
    }
    if (currencyTwo === "ADA") {
      c2 = "Cardano";
    }
    return c1 && c2;
  };

  helper(chosenPrimaryCurrency, chosenSecondaryCurrency);

  return (
    <div className="exchange-rate">
      {result ? (
        <p>
          The exchange rate for a single {c1} to {c2} is
          <br /> {exchangeRate}:1
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
export default ExchangeRateDisplay;
