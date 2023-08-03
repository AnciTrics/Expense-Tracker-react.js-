import Header from './components/header';
import Balance from './components/balance';
import './App.css';
import IncomeExpences from './components/incomeExpences';
import TransactionList from './components/transactionList';
import Addtranc from './components/addtranc';
import { GlobalProvider } from './content/global';
function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance/>
          <IncomeExpences/>
          <TransactionList/>
          <Addtranc/>
      </div>
    </GlobalProvider>
  );
}

export default App;
