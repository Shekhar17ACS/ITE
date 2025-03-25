// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./Services/AuthServices/AuthUser";
import store from "./components/Redux/Store/store";
import { ToastContainer, toast } from 'react-toastify';

import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider> 
     <App />
     <ToastContainer/>
   </AuthProvider>
    </Provider>
  </React.StrictMode>
);
