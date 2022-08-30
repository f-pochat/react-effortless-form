import React from 'react';
import {TextInput} from "./index";
import PropTypes from "prop-types";

const PasswordInput = (props) => {
    return (
        <TextInput
            {...props}
            inputType={'password'}
            textLabel={props.passwordLabel}
        />
    );
};

PasswordInput.propTypes = {
    passwordLabel: PropTypes.string,
}

PasswordInput.defaultProps = {
    passwordLabel: 'Password'
}

export default PasswordInput;