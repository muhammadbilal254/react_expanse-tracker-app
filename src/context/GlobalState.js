import { Children, createContext, useReducer } from 'react'

// import the appReducer
import AppReducer from './Appreducer'

// Create the Initial State
const initialState = {
    transactions: [
        { id: 1, description: "Income 1", amount: 3000 },
        { id: 2, description: "Expanse 1", amount: -300 },
        { id: 3, description: "Income 2", amount: 1000 },
        { id: 4, description: "Expanse 2", amount: - 500 },
    ]
}


// create the Global Context

export const GlobalContext = createContext(initialState)

// Context Provider

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Delete transaction function

    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Add Transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }


    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
} 
