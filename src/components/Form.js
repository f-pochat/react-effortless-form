import React, {Children} from 'react';
import PropTypes from "prop-types";
import './Form.css'
import {Email, Password} from "./inputs";

const validChildren = [
    Email, Password
]

const Form = (props) => {
    Form.propTypes = {
        backgroundImage: PropTypes.string,
        backgroundImageSize: PropTypes.string,
        backgroundColor: PropTypes.string,
        containerColor: PropTypes.string,
        containerSize: PropTypes.shape({
            width: PropTypes.string.isRequired,
            height: PropTypes.string.isRequired
        }),
        children: PropTypes.oneOfType([
            PropTypes.instanceOf(HTMLAnchorElement)
        ])
    }

    Form.defaultProps = {
        backgroundImageSize: 'cover',
        containerSize: {
            width: '50%',
            height: '75%'
        }
    }

    return (
        <div
            className={'container'}
            style={props.backgroundImage ? {
                backgroundImage: 'url('+props.backgroundImage+')',
                backgroundSize: props.backgroundImageSize,
                width: '100vw',
                height: '100vh'
                }:{
                backgroundColor: props.backgroundColor,
                width: '100vw',
                height: '100vh'
                }
        }
        >
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
            </div>
        </div>
    );
};

export default Form;