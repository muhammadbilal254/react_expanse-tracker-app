import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState' //import Global Context


const Transaction = ({ transaction }) => {

    // for delete Transaction
    const { delTransaction } = useContext(GlobalContext);
    // // console.log(delTransaction(1));

    const sign = transaction.amount > 0 ? '+' : '-';
    const transactionType = transaction.amount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className='delete-btn' onClick={() => { delTransaction(transaction.id); }}>X</button>
        </li>
    )
}

export default Transaction
