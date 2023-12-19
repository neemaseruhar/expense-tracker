import React from 'react'
import { useTransaction } from '../context/TransactionContext'
import { TransactionCard } from './TransactionCard'

export const TransactionList = () => {
    const {transactions} = useTransaction()
  return (
    <>
     <h3>History</h3>
      <ul  className="list">
      {transactions.map(transaction => (
         <TransactionCard transaction={transaction} key={transaction.id}/>
      ))}
        
      </ul>
    </>
  )
}
