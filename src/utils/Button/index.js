import React from 'react';
import './button.css';

const Button = props => (
    <button className={`btn btn-${props.size}`}>{props.children}</button>
);

export default Button;

