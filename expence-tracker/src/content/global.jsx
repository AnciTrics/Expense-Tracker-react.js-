import React, {createContext,useReducer} from "react";
import AppReducer from './AppReducer';
const InitialState = {
    transation: [
 
    ]
}

export const GlobalContext = createContext(InitialState);

// provider 
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer, InitialState)

// action
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
}
function addTransaction(transation){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transation
    })
}

    return (<GlobalContext.Provider value={{
        transation:state.transation,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}