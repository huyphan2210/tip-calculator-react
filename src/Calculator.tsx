import { MouseEvent, useState } from 'react';
import './Calculator.css';

import CustomInput from './components/CustomInput';

import iconDollar from './assets/images/icon-dollar.svg';
import iconPerson from './assets/images/icon-person.svg';

function Calculator() {
  const billLabel = 'Bill';
  const numOfPeopleLabel = 'Number of People';

  const [bill, setBill] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(0);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const [isResetDisable, setIsResetDisable] = useState(true);

  const handleSelectTip = (e: MouseEvent) => {
    document.querySelectorAll('#tipPercentage button').forEach((button) => {
      button.setAttribute('style', '');
    })
    e.currentTarget.setAttribute('style', 'color: var(--very-dark-cyan); background-color: var(--strong-cyan);')
  }

  return (
    <div className="calculator">
      <div className='inputs'>
        <CustomInput label={billLabel} icon={iconDollar}></CustomInput>
        <div className='selectTip'>
          <label htmlFor='tipPercentage'><small>Select Tip %</small></label>
          <div id="tipPercentage">
            <button type='button' onClick={(e) => handleSelectTip(e)}>5%</button>
            <button type='button' onClick={(e) => handleSelectTip(e)}>10%</button>
            <button type='button' onClick={(e) => handleSelectTip(e)}>15%</button>
            <button type='button' onClick={(e) => handleSelectTip(e)}>25%</button>
            <button type='button' onClick={(e) => handleSelectTip(e)}>50%</button>
            <div>
              <img src={iconDollar} alt='Custom Tip'></img>
              <input type='text' placeholder='Custom'></input>
            </div>
          </div>
        </div>
        <CustomInput label={numOfPeopleLabel} icon={iconPerson}></CustomInput>
      </div>
      <div className='result'>
        <div className='calc'>
          <div className='calcLabel'>
            <span>Tip Amount</span>
            <small>/ person</small>
          </div>
          <h1>${tipAmount}</h1>
        </div>
        <div className='calc'>
          <div className='calcLabel'>
            <span>Total</span>
            <small>/ person</small>
          </div>
          <h1>${total}</h1>
        </div>
        <button type='button' disabled={isResetDisable}>Reset</button>
      </div>
    </div>
  )
}

export default Calculator;
