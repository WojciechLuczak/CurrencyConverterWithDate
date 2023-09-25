import React from 'react';
import "./style.css";

const MoneyToConvert = () => {
    return(
<div>
<label className="form__label" for="amount">
Kwota:
</label>
<input
className="form__input"
type="number"
id="amount"
placeholder="tutaj wpisz kwote do przeliczenia"
/>
</div>


    );
};

export default MoneyToConvert;


