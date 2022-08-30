import React, {useState} from 'react';
import PropTypes from "prop-types";
import './Input.css';

const TextInput = (props) => {

    const [color, setColor] = useState(props.labelColor);
    const [value, setValue] = useState('');

    const handleValue = (val) => {
        if (validValue(val)){
            setColor(props.successColor)
        }else{
            setColor(props.errorColor)
        }
        setValue(val)
        props.onChange(val)
    }

    const validValue = (val) => {
        const validRegex = props.regexValidation;
        return (val.match(validRegex) && val.length >= props.minLength && val.length <= props.maxlength)
    }

    return (
        <div className="form-group">
            <div className="input-box">
                <input type={props.inputType}
                       onFocus={() => setColor(props.errorColor)}
                       onBlur={() => {
                           if (value===''){
                               setColor(props.labelColor)
                           }else if (validValue(value)){
                               setColor(props.successColor)
                           }}}
                       onChange={e => handleValue(e.target.value)}
                       style={{color: props.textInputColor, borderBottomColor: color}}
                       required
                />
                <label style={{color: color}}>{props.textLabel}</label>
            </div>
        </div>
    );
}

TextInput.propTypes = {
    textLabel: PropTypes.string.isRequired,
    textInputColor: PropTypes.string,
    labelColor: PropTypes.string,
    errorColor: PropTypes.string,
    successColor: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    regexValidation: PropTypes.instanceOf(RegExp),
    inputType: PropTypes.oneOf(['number','text','password']),
    minLength: PropTypes.number,
    maxlength: PropTypes.number,
}

TextInput.defaultProps = {
    textInputColor: 'white',
    labelColor: 'white',
    errorColor: 'red',
    successColor: 'green',
    regexValidation: /\w+/,
    inputType: 'text',
    minLength: 0,
    maxlength: 255,
}

export default TextInput;