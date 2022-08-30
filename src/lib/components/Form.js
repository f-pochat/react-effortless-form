import React, {Children} from 'react';
import PropTypes from "prop-types";
import './Form.css'
import {EmailInput, PasswordInput, TextInput} from "./inputs";
import {SubmitButton, Label, Wrapper} from "./util";

const validChildren = [
    EmailInput, PasswordInput, TextInput, Label, SubmitButton, Wrapper
]

const Form = (props) => {

    return (
        <div className='form-container'
             id={props.boxShadow && 'box-shadow'}
             style={{
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
        </div>
    );
};

Form.propTypes = {
    containerColor: PropTypes.string,
    containerSize: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired
    }),
    boxShadow: PropTypes.bool,
}

Form.defaultProps = {
    containerSize: {
        width: '50%',
        height: '75vh'
    },
    boxShadow: true,
}

export default Form;