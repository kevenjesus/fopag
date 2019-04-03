import React from 'react';
import Item from './Item'
import './Widget.css'

const Widget = props => (
    <div className="widget">       
        <div className="widgetTittle">{props.titulo}</div>
        <div className="widgetItens">
            <Item titulo="Em andamento"/>
            <Item titulo="Aguardando Efetivação"/>
            <Item titulo="Efetivados"/>
            <Item titulo="Cancelados"/>
        </div>
    </div> 
);

export default Widget;