import React, { useState } from 'react';
import { Clock } from './Clock';
import {
  BackgroundContainer,
  FormContainer,
  FormTitle,
  FormElement,
  FormLabel,
  FormInput,
  FormSelect,
  Result,
  FormButton,
} from './styled.js';

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
        return 1;
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
    <BackgroundContainer>
      <FormContainer>
        <Clock />
        <FormTitle>Kalkulator Walut</FormTitle>
        <FormElement>
          <FormLabel htmlFor="amount">Kwota:</FormLabel>
          <FormInput
            type="number"
            id="amount"
            placeholder="tutaj wpisz kwote do przeliczenia"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </FormElement>

        <FormElement>
          <FormLabel htmlFor="from">Z:</FormLabel>
          <FormSelect
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </FormSelect>
        </FormElement>

        <FormElement>
          <FormLabel htmlFor="to">Na:</FormLabel>
          <FormSelect
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="PLN">PLN</option>
          </FormSelect>
        </FormElement>

        <FormButton onClick={convertCurrency}>Przelicz</FormButton>

        <Result>{result}</Result>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default Form;