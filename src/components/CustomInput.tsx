import './CustomInput.css';

function Input(props: {
    label: string,
    icon: string
}) {
    return (
        <div className='input'>
            
            <label htmlFor={props.label.replace(' ', '-')}><small>{props.label}</small></label>
            <div>
                <img src={props.icon} alt={props.icon}></img>
                <input id={props.label.replace(' ', '-')}></input>
            </div>
            
        </div>
    )
}

export default Input;