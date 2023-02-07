const { createStore } = require("redux");

//constance
const ADD_USER = "ADD_USER";

//state
const initialState = {
  count: 1,
  users: ["Samirun"],
}

//action
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
}

//reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      }
    default:
      state;
  }
}

//store
const store = createStore(userReducer);

//for checking store output
store.subscribe(() => {
  console.log(store.getState());
})

//for hit to action
store.dispatch(addUser("Shuvo"));
store.dispatch(addUser("Miah"));

