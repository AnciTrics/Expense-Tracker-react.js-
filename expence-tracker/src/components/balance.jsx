import React , {useContext} from "react";
import { GlobalContext } from "../content/global";
const Balance = () => {
    const {transation} = useContext(GlobalContext);
    const amounts = transation.map(transation => transation.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
