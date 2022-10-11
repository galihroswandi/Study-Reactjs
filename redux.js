const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value : "1",
    age : 19
}

// Reducer
const rootReducer = (state = initialState, action) => {
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatch Action

// Subscription