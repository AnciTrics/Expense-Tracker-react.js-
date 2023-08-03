import React , {useContext} from 'react'
import { GlobalContext } from '../content/global'
import Transaction from './transaction';
const TransactionList = () => {
    const {transation} = useContext(GlobalContext);
  return (
    <>
       <h3>History</h3>
      <ul id="list" className="list">
        {transation.map(transation => (<Transaction key={transation.id} price={transation.amount} transation={transation}/>))}
        
      </ul>
    </>
  )
}

export default TransactionList
