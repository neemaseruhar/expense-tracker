

export const transactionReducer = (state,action) => {
  const {type,payload} = action;

  switch(type){

    case "DELETE_TRANSACTION":
      return{...state,transactions:payload.transactions}

    case "ADD_TRANSACTION":
      return {...state,transactions:[payload,...state.transactions]}

    default:
      return state

  }
}
