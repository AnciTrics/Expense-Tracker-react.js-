import React, {useContext} from 'react';
import { GlobalContext } from '../content/global';


const Transaction = ({ transation }) => {
    const {deleteTransaction} = useContext(GlobalContext)
    
    const sign = transation.amount <  0 ? '-' : '+'
    const color= sign === '-' ? 'minus':'plus';
  return (
    <li className={color}>
         {transation.text}<span>{sign}${Math.abs(transation.amount)}</span><button onClick={() => deleteTransaction(transation.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
