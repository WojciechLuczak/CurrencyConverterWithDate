import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('PLN');
  const [to, setTo] = useState('USD');
  const [result, setResult] = useState('');

  const getExchangeRate = (fromCurrency, toCurrency) => {
    switch (fromCurrency) {
      case 'PLN':
        switch (toCurrency) {
          case 'USD':
            return 0.26;
          case 'EUR':
            return 0.22;
          default:
            return 1;
        }
      case 'USD':
        switch (toCurrency) {
          case 'PLN':
            return 3.85;
          case 'EUR':
            return 0.85;
          default:
            return 1;
        }
      case 'EUR':
        switch (toCurrency) {
          case 'PLN':
            return 4.53;
          case 'USD':
            return 1.17;
          default:
            return 1;
        }
      default:
        return 1; // Default rate when unknown currencies are used
    }
  };

  const convertCurrency = () => {
    const rate = getExchangeRate(from, to);

    if (from === to) {
      setResult('Wybierz waluty inne od siebie!');
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      setResult('Wpisz dodatnią liczbę');
      return;
    }

    const calculatedResult = amount * rate;
    setResult(`${amount} ${from} = ${calculatedResult.toFixed(2)} ${to}`);
  };

  return (
    <div className="backgroundContainer">
      <div className="formContainer">
        <h1 className="formContainer__title">Kalkulator Walut</h1>
        <div className="form">
          <label className="form__label" htmlFor="amount">
            Kwota:
          </label>
          <input
            className="form__input"
            type="number"
            id="amount"
            placeholder="tutaj wpisz kwote do przeliczenia"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />

          <label className="form__label" htmlFor="from">
            Z:
          </label>
          <select className="form__select" id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>

          <label className="form__label" htmlFor="to">
            Na:
          </label>
          <select className="form__select" id="to" value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="PLN">PLN</option>
          </select>

          <button className="form__button" onClick={convertCurrency}>
            Przelicz
          </button>
        </div>

        <div id="result" className="result">
          {result}
        </div>
      </div>
    </div>
  );
};

export default Form; 