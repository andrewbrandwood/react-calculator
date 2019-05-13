import React from 'react';

export const Button = props => (
    <button className="btn {props.className}" >
        {props.btnText}
    </button>
)

export default Button;
