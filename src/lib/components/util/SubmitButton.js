import React from 'react';
import PropTypes from "prop-types";

const SubmitButton = (props) => {

    return (
        <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <div
                className={props.className}
                style={{
                    ...props.style,
                    backgroundColor: props.submitButtonColor,
                    color: props.submitButtonTextColor,
                }}
                onClick={props.onSubmit}>
                {props.submitText}
            </div>
        </div>
    );
};

SubmitButton.propTypes = {
    submitText: PropTypes.string,
    submitButtonColor: PropTypes.string,
    submitButtonTextColor: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
}

SubmitButton.defaultProps = {
    submitText: 'Submit',
    submitButtonColor: 'black',
    submitButtonTextColor: 'white',
    className: 'submit-button-class',
    style: {},
}

export default SubmitButton;