
import './App.css';
import { AddTransaction } from './componenets/AddTransaction';
import { Balance } from './componenets/Balance';
import { Header } from './componenets/Header';
import { IncomeExpenses } from './componenets/IncomeExpenses';
import { TransactionList } from './componenets/TransactionList';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    
    <TransactionProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        
      </div>
      </TransactionProvider>
    
  );
}

export default App;
