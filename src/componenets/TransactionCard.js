import { useTransaction } from "../context/TransactionContext"

export const TransactionCard = ({transaction}) => {
     const {deleteTransaction} = useTransaction()
    const sign = transaction.amount <0 ? "-" : "+"
  return (
    <>
       <li className={transaction.amount< 0 ? "minus" : "plus"}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button classNameS="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li> 
    </>
  )
}
