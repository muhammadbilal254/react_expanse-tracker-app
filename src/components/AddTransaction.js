import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState()

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description: desc,
            amount: +amount
        };
        addTransaction(newTransaction)

        setAmount("")
        setDesc("")
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type='text' value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder='Detail Description...' />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Transaction Amount
                    </label>
                    <input type='number' value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder='Transaction amount...' />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
