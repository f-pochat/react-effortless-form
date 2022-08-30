import React from 'react';
import PropTypes from "prop-types";

const Label = (props) => {

    return (
        <div style={{flex: 1}}>
            <p className={props.className}>{props.value}</p>
        </div>
    );
};

Label.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
}

Label.defaultProps = {
    value: '',
    className: '',
}

export default Label;