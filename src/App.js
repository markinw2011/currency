import { useEffect, useState } from "react";
import CurrencyComponent from "./components/CurrencyComponent";
import money from "./img/money.png";

function App() {
  const [currencyChoice, setCurrencyChoice] = useState([]);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const [amount, setAmount] = useState(1);
  const [exChangeRate, setExchangeRate] = useState(0);

  const [checkFromCurrency, setCheckFromCurrency] = useState(true);

  let fromAmount, toAmount;

  if (checkFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exChangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exChangeRate).toFixed(2);
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyChoice([...Object.keys(data.rates)]);
        setExchangeRate(data.rates[toCurrency]);
      });
  }, [fromCurrency, toCurrency]);
  return (
    <div>
      <img src={money} alt="logo" className="money-img" />
      <h1>แอพแปลงสกุลเงิน</h1>
      <div className="container">
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)}
          amount ={fromAmount}
        />
        <div className="equal"> = </div>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={toCurrency}
          changeCurrency={(e) => setToCurrency(e.target.value)}
          amount ={toAmount}
        />
      </div>
    </div>
  );
}

export default App;
