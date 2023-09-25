import React from "react";
import "./style.css";

const CurrencyChooser = ({ title, target }) => {
  return (
    <div>
      <label className="form__label" for={target}>
        {title}:
      </label>
      <select className="form__select">
        <option>PLN</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
    </div>
  );
};
export default CurrencyChooser;
