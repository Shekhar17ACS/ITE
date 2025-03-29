import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "../ReduxSlice/UserSlice"
import forgotPasswordReducer from "../ReduxSlice/ForgotPasswordSlice";
import otpSlice from "../ReduxSlice/OtpSlice"
import LoginSlice from "../ReduxSlice/LoginSlice"

const store = configureStore({
  reducer: {
    user: userReducer,  // Add reducers here
    forgotPassword: forgotPasswordReducer,  // Add reducers here
    otp: otpSlice,
    LoginUser: LoginSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
