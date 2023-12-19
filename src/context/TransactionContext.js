import { createContext, useContext, useReducer } from "react";
import { transactionReducer } from "./transactionReducer";
import { type } from "@testing-library/user-event/dist/type";

const initialState ={
    transactions : []
}

 const TransactionContext = createContext(initialState)

export const TransactionProvider = ({children}) => {
    const [state,dispatch] = useReducer(transactionReducer,initialState)

    const deleteTransaction= (id) =>{
        const updatedTransactions = state.transactions.filter(item => item.id !== id)
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:{
                transactions: updatedTransactions
            }
        })
    }
    const addTransaction =(newTransaction) => {
       
        dispatch({
            type:"ADD_TRANSACTION",
            payload: newTransaction
        })
    }
    const value= {
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }
    return (
        <TransactionContext.Provider value={value}>
        {children}
        </TransactionContext.Provider>
    )
}

export const useTransaction =() => useContext(TransactionContext)