export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transation: state.transation.filter(
          (transation) => transation.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
        return{
            ...state,
            transation:[action.payload,...state.transation]
        }
    default:
      return state;
  }
};
