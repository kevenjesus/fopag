import React from 'react';
import DetailsItem from './DetailsItem';



const Details = ({list, headline}) => (
    <div className="details">
        <h2 className="details-headline">{headline}</h2>
        <table>
        <thead>
            <tr>
                <th>Filial</th>
                <th>CPF</th>
                <th>Data Admissão</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                list.map((item, index) => <DetailsItem key={index} filial={item.filial} cpf={item.cpf} data={item.data} />)
            }
        </tbody>
        </table>
    </div>
)

export default Details;