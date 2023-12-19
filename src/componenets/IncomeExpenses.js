import React from 'react';
import { useTransaction } from '../context/TransactionContext';

export const IncomeExpenses = () => {
   const {transactions} = useTransaction();

   const amounts = transactions.map (transaction => transaction.amount)
    const income = amounts.filter(amount => amount > 0).reduce((acc,item) => (acc += item),0).toFixed(2)
    const expense = (amounts.filter(amount => amount<0).reduce((acc,item) => (acc += item),0) * -1).toFixed(2)

  return (
       <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-${expense}</p>
        </div>
      </div>
  )
}
