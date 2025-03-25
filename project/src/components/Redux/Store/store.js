import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "../ReduxSlice/UserSlice"
// import forgotPasswordReducer from "../ReduxSlice/ForgotPasswordSlice";


const store = configureStore({
  reducer: {
    user: userReducer,  // Add reducers here
    // forgotPassword: forgotPasswordReducer,  // Add reducers here
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
