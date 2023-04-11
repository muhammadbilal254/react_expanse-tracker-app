import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState' //import Global Context

const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext)
    // console.log(transactions);

    const amount = transactions.map((transaction) => transaction.amount)
    const income = amount
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(1);

    const expense = Math.abs(amount
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
    ).toFixed(1);


    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>${income}</p>
            </div>
            <div>
                <h4>Expanse</h4>
                <p className='money minus'>${expense}</p>
            </div>

        </div>
    )
}

export default AccountSummary
