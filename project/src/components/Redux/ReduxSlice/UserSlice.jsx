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
    if (response.status === 200) {
      return response;
    } else {
      return rejectWithValue(response.message || "Signup failed");
    }
  } catch (error) {
    console.error("error", error);
    if (error.response) {
      console.error("error response", error.response);
      return rejectWithValue(error.response.data.message || "Something went wrong");
    } else {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
});
  

const initialState = {
    loading: false,
    data:[],
  formData: {
    email: "",
    title: "",
    name:"",
    middle_name:"",
    last_name:"",
    password: "",
    confirm_password: "",
    // username: "",
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
