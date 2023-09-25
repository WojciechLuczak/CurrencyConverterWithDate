import React from "react";
import CurrencyChooser from "./CurrencyChooser";
import MoneyToConvert from "./MoneyToConvert";

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

            <button className="form__button" onclick="convert()">
              Przelicz
            </button>
          </div>

          <div id="result" className="result"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
