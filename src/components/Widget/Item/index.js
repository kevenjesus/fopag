import React from 'react';
import Indicator from './Indicator'
import './Item.css'

const Item = props => (
    <div className="item">
        <span>{props.titulo}</span>
        <Indicator text="4"/>
    </div>
);

export default Item;