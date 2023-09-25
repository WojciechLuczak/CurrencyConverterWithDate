import React from 'react';
import "./style.css";
import CurrencyChooser from "./CurrencyChooser";
import MoneyToConvert from "./MoneyToConvert";
import Button from "./Button";

const Form = () => {
    return (
      <div>
        <div className="formContainer">
        <h1 className="formContainer__title">Kalkulator Walut</h1>
          <div className="form">
          <MoneyToConvert />
            <CurrencyChooser title="Z" target="from"/>
            <CurrencyChooser title="Na" target="to"/>
            <Button />
          </div>
        </div>
        
      </div>
    );
  };
  export default Form;
  