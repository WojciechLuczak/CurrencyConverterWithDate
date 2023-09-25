import React from 'react';
import "./style.css";

const CurrencyChooser = () => {
    return (
<select className="form__select">
          <option>PLN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
    );
    
};
export default CurrencyChooser;