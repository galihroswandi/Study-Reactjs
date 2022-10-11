import GlobalActionType from "./GlobalActionType";

const globalState = {
    totalOrder : 1
  }
  
  // Reducer
  const rootReducer = (state = globalState, action) => {
  
    switch( action.type ){
      case GlobalActionType.PLUS_ORDER :
        return{
          ...state,
          totalOrder : state.totalOrder + 1
        }
      case GlobalActionType.MINUS_ORDER : 
  
        let order = 0;
        if( state.totalOrder > 0 ){
          order = state.totalOrder - 1
        }
        return{
          ...state,
          totalOrder : order,
        }
        
      default : 
        return state;
    }
  
  }
  
  export default rootReducer;