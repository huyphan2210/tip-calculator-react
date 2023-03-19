import { useState } from 'react';
import './Calculator.css';

import CustomInput from './components/CustomInput';

import iconDollar from './assets/images/icon-dollar.svg';
import iconPerson from './assets/images/icon-person.svg';

function Calculator() {
  const billLabel = 'Bill';
  const numOfPeopleLabel = 'Number of People';
  return (
    <div className="calculator">
      <div className='inputs'>
        <CustomInput label={billLabel} icon={iconDollar}></CustomInput>
        <div className='selectTip'>
          <label htmlFor='tipPercentage'><small>Select Tip %</small></label>
          <div id="tipPercentage">
            <button type='button'>5%</button>
            <button type='button'>10%</button>
            <button type='button'>15%</button>
            <button type='button'>25%</button>
            <button type='button'>50%</button>
            <input placeholder='Custom'></input>
          </div>
        </div>
        <CustomInput label={numOfPeopleLabel} icon={iconPerson}></CustomInput>
      </div>
      <div className='result'>
        Tip Amount
        / person

        Total
        / person

        Reset
      </div>
    </div>
  )
}

export default Calculator;
