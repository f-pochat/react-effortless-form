import React, {useState} from 'react';
import PropTypes from "prop-types";
import './Input.css';
import {TextInput} from "./index";

const EmailInput = (props) => {

    return (
       <TextInput
           {...props}
           textLabel={props.emailLabel}
           regexValidation={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/}
       />
    );
}

EmailInput.propTypes = {
    emailLabel: PropTypes.string,
}

EmailInput.defaultProps = {
    emailLabel: 'Email',
}

export default EmailInput;