import React, { useState } from 'react';
import { useTransaction } from '../context/TransactionContext';

export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {addTransaction} = useTransaction();

    const newTransaction = {
      id: Math.floor(Math.random()* 1000000),
      text,
      amount : +amount
    }

    const handleSubmit = (e) =>{
      
      e.preventDefault();

      const newTransaction = {
      id: Math.floor(Math.random()* 1000000),
      text,
      amount : +amount
    }
      addTransaction(newTransaction)
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..."  value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" placeholder="Enter amount..."  value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button type="submit"  className="btn">Add transaction</button>
      </form>
    </>
  )
}
