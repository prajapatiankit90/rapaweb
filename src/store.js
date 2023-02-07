import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./Slice/user.slice";

const reducer  = {
   users : useReducer
}
const store = configureStore({
    reducer: reducer,
    devTools: true,
  })
  
  export default store;