import React from "react";
import CurrencyChooser from "./CurrencyChooser";
import MoneyToConvert from "./MoneyToConvert";
import Button from "./Button";

function App() {
  return (
    <div>
      <div className="backgroundContainer">
        <div className="formContainer">
          <h1 className="formContainer__title">Kalkulator Walut</h1>
          <div className="form">
          <MoneyToConvert />

            <label className="form__label" for="from">
              Z:
            </label>
            <CurrencyChooser />

            <label className="form__label" for="to">
              Na:
            </label>
            <CurrencyChooser />

            <Button />
          </div>

          <div id="result" className="result"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
