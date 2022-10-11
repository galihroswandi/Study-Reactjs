const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value : 1,
    age : 19
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch( action.type ){
        case "ADD_AGE" :
            return {
                ...state,
                age : state.age + 1,
            }
        case "CHANGE_VALUE" : 
            return{
                ...state,
                value : state.value + action.newValue
            }
        default :
            return state;
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log("Store Change : ", store.getState());
})

// Dispatch Action
store.dispatch({type : "ADD_AGE"});
store.dispatch({type : "CHANGE_VALUE", newValue : 99})
console.log(store.getState());
