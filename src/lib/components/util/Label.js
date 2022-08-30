import React from 'react';
import PropTypes from "prop-types";

const Label = (props) => {

    return (
        <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <p className={props.className} style={props.style}>{props.value || props.children}</p>
        </div>
    );
};

Label.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
}

Label.defaultProps = {
    value: '',
    className: '',
    style: {},
}

export default Label;