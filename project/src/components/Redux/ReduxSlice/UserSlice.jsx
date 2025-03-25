import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Resister } from "../../../Services/ApiServices/ApiService";
import {toast} from "react-toastify"

// Async Thunk Action (API Call Example)
// export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   return response.json();
// });

export const SignUp = createAsyncThunk("user/SignUp", async (data, { rejectWithValue }) => {
    try {
      const response = await Resister(data);
      console.log("response", response);
  
      if (response.status) {
        return response; // ✅ Ensure the response is returned properly
      } else {
        return rejectWithValue(response.message || "Signup failed"); // ✅ Handle API failure
      }
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error.message || "Something went wrong"); // ✅ Return error message properly
    }
  });
  

const initialState = {
    loading: false,
    data:[],
  formData: {
    email: "",
    name:"",
    password: "",
    confirm_password: "",
    username: "",
    mobile_no: "",
  },
};

const userSlice = createSlice({
  name: "user",
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
      .addCase(SignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        console.log("action.payload",action.payload)
        state.loading = false;
        state.data = action.payload?.data || action.payload; // ✅ Ensure `data` is properly assigned
        toast.success(action.payload?.message || "Signup successful!");
      })
      .addCase(SignUp.rejected, (state, action) => {
         console.log("111",action)
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.payload.error||"Something went wrong")
      });
  },
});

export const { UpdateFormData,resetFormData } = userSlice.actions;
export default userSlice.reducer;
