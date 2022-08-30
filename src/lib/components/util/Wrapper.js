import React from 'react';

const Wrapper = (props) => {
    return (
        <div style={{flex: 1, display: 'flex',flexDirection: 'column', justifyContent: 'space-around'}}>
            {props.children}
        </div>
    );
};

export default Wrapper;