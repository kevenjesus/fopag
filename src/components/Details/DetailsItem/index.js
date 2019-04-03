import React from 'react';
import Button from '../../../utils/Button';
import CheckIcon from '../../../assets/icons/check.svg';
import CloseIcon from '../../../assets/icons/close.svg';


const DetailsItem = ({filial, cpf, data}) => (
    <tr>
        <td>{filial}</td>
        <td>{cpf}</td>
        <td>{data}</td>
        <td>
            <Button>
                <img src={CheckIcon} className="icon" />
            </Button>
            <Button>
                <img src={CloseIcon} className="icon" />
            </Button>
        </td>
    </tr>
);

export default DetailsItem;