import React, {Children} from 'react';
import PropTypes from "prop-types";
import './Form.css'
import {EmailInput, Label, PasswordInput, TextInput} from "./inputs";

const validChildren = [
    EmailInput, PasswordInput, TextInput, Label,
]

const Form = (props) => {

    const submitData = () => {
        console.log(props.submitMessage)
    }

    return (
        <div className='form-container' style={{
            backgroundColor: props.containerColor,
            width: props.containerSize.width,
            height: props.containerSize.height,
        }}>
            {
                Children.map(props.children, child => {
                    if (validChildren.includes(child.type)) return child
                    else throw Error('Not valid children!')
                })
            }
            {
                props.hasSubmitButton &&
                <div
                    className='form-button'
                    style={{backgroundColor:'red', flex: 1}}
                    onClick={submitData}>
                    {props.submitMessage}
                </div>
            }
        </div>
    );
};

Form.propTypes = {
    containerColor: PropTypes.string,
    containerSize: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired
    }),
    hasSubmitButton: PropTypes.bool,
    submitMessage: PropTypes.string,
}

Form.defaultProps = {
    containerSize: {
        width: '50%',
        height: '75vh'
    },
    hasSubmitButton: true,
    submitMessage: 'Submit',
}

export default Form;