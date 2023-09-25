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
            <CurrencyChooser title="Z" target="from"/>
            <CurrencyChooser title="Na" target="to"/>
            <Button />
          </div>

          <div id="result" className="result"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
