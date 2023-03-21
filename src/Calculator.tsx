import { MouseEvent, KeyboardEvent, useState, ChangeEvent } from 'react';
import './Calculator.css';

import CustomInput from './components/CustomInput';

import iconDollar from './assets/images/icon-dollar.svg';
import iconPerson from './assets/images/icon-person.svg';

function Calculator() {
  const billLabel = 'Bill';
  const numOfPeopleLabel = 'Number of People';

  const [bill, setBill] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(0);

  const [customTip, setCustomTip] = useState(0)

  const [tipAmount, setTipAmount] = useState(0);

  const [isResetDisable, setIsResetDisable] = useState(true);

  const handleSelectTip = (e: MouseEvent) => {
    document.querySelectorAll('#tipPercentage button').forEach((button) => {
      button.setAttribute('style', '');
    })
    e.currentTarget.setAttribute('style', 'color: var(--very-dark-cyan); background-color: var(--strong-cyan);')
    setTipAmount(parseInt(e.currentTarget.innerHTML.replace('%', '')) / 100);
    setCustomTip(0)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!preventInvalidLetters(e, /^[0-9.]+$/)) e.preventDefault();
  }

  const handleChangeBill = (e: ChangeEvent<HTMLInputElement>) => {
    const billValue = parseFloat(e.currentTarget.value);
    if (billValue === 0 || isNaN(billValue) || e.currentTarget.value === '') {
      document.getElementsByClassName('input')[0].getElementsByTagName('small')[1].setAttribute('style', 'display: block;');
      e.currentTarget.setAttribute('class', 'error');
      return false;
    } else {
      document.getElementsByClassName('input')[0].getElementsByTagName('small')[1].setAttribute('style', '');
      e.currentTarget.setAttribute('class', '');
    }
    setBill(parseFloat(e.currentTarget.value));
    if (numOfPeople) setIsResetDisable(false)
    else setIsResetDisable(true)
  }

  const handleChangePeople = (e: ChangeEvent<HTMLInputElement>) => {
    const people = parseFloat(e.currentTarget.value);
    if (people === 0 || e.currentTarget.value === '') {
      document.getElementsByClassName('input')[1].getElementsByTagName('small')[1].setAttribute('style', 'display: block;');
      e.currentTarget.setAttribute('class', 'error');
      return false;
    } else {
      document.getElementsByClassName('input')[1].getElementsByTagName('small')[1].setAttribute('style', '');
      e.currentTarget.setAttribute('class', '');
    }
    setNumOfPeople(parseFloat(e.currentTarget.value));
    if (bill) setIsResetDisable(false)
    else setIsResetDisable(true)
  }

  const reset = () => {
    for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
      document.getElementsByTagName('input')[i].value = ''; 
      document.getElementsByTagName('input')[i].setAttribute('class', '');
    }
    setBill(0);
    setNumOfPeople(0);
    setIsResetDisable(true);

    document.getElementsByClassName('input')[0].getElementsByTagName('small')[1].setAttribute('style', '');
    document.getElementsByClassName('input')[1].getElementsByTagName('small')[1].setAttribute('style', '');

    document.querySelectorAll('#tipPercentage button').forEach((button) => {
      button.setAttribute('style', '');
    })
  }

  const hanldeCustomTip = (e: ChangeEvent<HTMLInputElement>) => {
    setTipAmount(0);
    setCustomTip(isNaN(parseFloat(e.currentTarget.value)) ? 0 : parseFloat(e.currentTarget.value));
    document.querySelectorAll('#tipPercentage button').forEach((button) => {
      button.setAttribute('style', '');
    })
  }

  function preventInvalidLetters(e: KeyboardEvent, regexr: RegExp) {
    return regexr.test(e.key) || e.key === 'Tab' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'F5' || e.key === 'ArrowRight' || e.key === 'ArrowLeft';
  }

  return (
    <div className="calculator">
      <div className='inputs'>
        <CustomInput handleChange={handleChangeBill} label={billLabel} icon={iconDollar}></CustomInput>
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
              <input maxLength={5} onChange={hanldeCustomTip} type='text' placeholder='Custom' onKeyDown={(e) => handleKeyDown(e)}></input>
            </div>
          </div>
        </div>
        <CustomInput handleChange={handleChangePeople} label={numOfPeopleLabel} icon={iconPerson}></CustomInput>
      </div>
      <div className='result'>
        <div className='calc'>
          <div className='calcLabel'>
            <span>Tip Amount</span>
            <small>/ person</small>
          </div>
          <h1>${Math.round((customTip && numOfPeople ? customTip / numOfPeople : tipAmount && numOfPeople ? bill * tipAmount / numOfPeople : 0) * 100) / 100}</h1>
        </div>
        <div className='calc'>
          <div className='calcLabel'>
            <span>Total</span>
            <small>/ person</small>
          </div>
          <h1>${Math.round((customTip && numOfPeople ? (bill + customTip) / numOfPeople : tipAmount && numOfPeople ? (bill + bill * tipAmount) / numOfPeople : numOfPeople ? bill / numOfPeople : 0) * 100) / 100}</h1>
        </div>
        <button onClick={reset} type='button' disabled={isResetDisable}>Reset</button>
      </div>
    </div>
  )
}

export default Calculator;
