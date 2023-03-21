import { ChangeEventHandler, KeyboardEvent } from 'react';
import './CustomInput.css';

function Input(props: {
    label: string,
    icon: string,
    handleChange: ChangeEventHandler
}) {
    const handleKeyDown = (e: KeyboardEvent) => {   
        if (props.label === 'Bill') {
            if (!preventInvalidLetters(e, /^[0-9.]+$/)) e.preventDefault();
        } else {
            if (!preventInvalidLetters(e, /^[0-9]+$/)) e.preventDefault();
        }
    }

    function preventInvalidLetters(e: KeyboardEvent, regexr: RegExp) {
        return regexr.test(e.key) || e.key === 'Tab' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'F5';
    }

    return (
        <div className='input'>
            <label htmlFor={props.label.replace(' ', '-')}>
                <small>{props.label}</small>
                <small>Can't be zero</small>
            </label>
            <div>
                <img src={props.icon} alt={props.icon}></img>
                <input maxLength={5} onChange={props.handleChange} onKeyDown={handleKeyDown} onPaste={(e) => e.preventDefault()} id={props.label.replace(' ', '-')} placeholder='0'></input>
            </div>
        </div>
    )
}

export default Input;