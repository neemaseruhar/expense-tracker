import React from 'react'
import { useTransaction } from '../context/TransactionContext'

export const Balance = () => {
  const {transactions} = useTransaction();
 const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>

    
    </>
  )
}
