import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState' //import Global Context

const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transactions => transactions.amount)
    const total = amount.reduce((acc, total) => (acc += total), 0).toFixed(2)

    return (
        <div>
            <h4>
                Current Balance
            </h4>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance
