import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../../Services/ApiServices/ApiService";
import {toast} from "react-toastify"
// import { login} from "../../../Services/ApiServices/ApiService";

// Async Thunk Action (API Call Example)
// export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   return response.json();
// });

export const Login = createAsyncThunk("LoginUser/Login", async (data, { rejectWithValue }) => {
  try {
    console.log("data",data)
    const response = await login(data);
    console.log("response", response);
    if (response.success) {
      // return response;
      return response.data;
    } else {
      return rejectWithValue(response.message || "Signup failed");
    }
  } catch (error) {
    return rejectWithValue(error.message || "Signup failed");
  }
});
  

const initialState = {
    loading: false,
    data:[],
  formData: {
    email: "",
    password: "",
    // confirm_password: "",
    // username: "",
    // mobile_no: "",
  },
};

const LoginSlice = createSlice({
  name: "LoginUser",
  initialState,
  reducers: {
    UpdateFormData: (state, action) => {
      state.formData[action.payload.name] = action.payload.value;
    },
    resetFormData: (state, action) => {
      state.formData = initialState.formData;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.loading = true;
      })
      .addCase(Login.fulfilled, (state, action) => {
        console.log("action.payload",action.payload)
        state.loading = false;
        state.data = action.payload.data|| action.payload; // ✅ Ensure `data` is properly assigned
        toast.success("user Login successfully")
       
      })
      .addCase(Login.rejected, (state, action) => {
         console.log("111",action)
        state.loading = false;
        if (action.payload !== "Login successful.") {
          state.error = action.error.message;
          toast.error(action.error.message, "user Login failed")
        }
        // state.error = action.error.message;
        // // toast.error(error?.response?.message,"user Login successfully")
        // toast.error(action?.error.message,"user Login successfully")
      });
  },
});

export const { UpdateFormData,resetFormData } = LoginSlice.actions;
export default LoginSlice.reducer;
