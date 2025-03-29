import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { OtpValidate } from "../../../Services/ApiServices/ApiService";
import { useNavigate } from "react-router-dom";
// Async Thunk Action (API Call Example)
// export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   return response.json();
// });

export const postOtp = createAsyncThunk(
  "otp/postOtp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await OtpValidate(data);
      console.log("hlo", response);
      if (response && response?.application_id) {
        return response;
      } else {
        return rejectWithValue(response.message || "Signup failed");
      }
    } catch (error) {
      
        return rejectWithValue(error.message || "Something went wrong");
      }
    }
);

  

const initialState = {
  loading: false,
  data: [],
  formData: {
    email: "",
    otp: "",
  },
};

const otpSlice = createSlice({
  name: "otp",
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
      .addCase(postOtp.pending, (state,action) => {
        state.loading = true;
      })
      .addCase(postOtp.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.loading = false;
        state.data = action.payload?.data || action.payload; // ✅ Ensure `data` is properly assigned
        toast.success(action.payload?.message || "postOtp successful!");
        
      })
      .addCase(postOtp.rejected, (state, action) => {
        console.log("111", action);
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.payload.error || "Something went wrong");
      });
  },
});

export const { UpdateFormData, resetFormData } = otpSlice.actions;
export default otpSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import { OtpValidate } from "../../../Services/ApiServices/ApiService";

// // Define the postOtp thunk
// export const postOtp = createAsyncThunk(
//   "otp/postOtp",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await OtpValidate(data);
//       console.log("response", response);
//       if (response.status === 200) {
//         return response;
//       } else {
//         return rejectWithValue(response.message || "OTP validation failed");
//       }
//     } catch (error) {
//       console.error("error", error);
//       if (error.response) {
//         console.error("error response", error.response);
//         return rejectWithValue(error.response.data.message || "Something went wrong");
//       } else {
//         return rejectWithValue(error.message || "Something went wrong");
//       }
//     }
//   }
// );

// // Define the initial state
// const initialState = {
//   loading: false,
//   data: [],
//   formData: {
//     email: "",
//     otp: "",
//   },
//   error: null,
// };

// // Define the otpSlice
// const otpSlice = createSlice({
//   name: "otp",
//   initialState,
//   reducers: {
//     updateFormData: (state, action) => {
//       state.formData[action.payload.name] = action.payload.value;
//     },
//     resetFormData: (state) => {
//       state.formData = initialState.formData;
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(postOtp.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(postOtp.fulfilled, (state, action) => {
//         console.log("action.payload", action.payload);
//         state.loading = false;
//         state.data = action.payload?.data || action.payload;
//         toast.success(action.payload?.message || "OTP validation successful!");
//       })
//       .addCase(postOtp.rejected, (state, action) => {
//         console.log("111", action);
//         state.loading = false;
//         state.error = action.error.message;
//         toast.error(action.payload.error || "OTP validation failed. Please try again.");
//       });
//   },
// });

// // Export the actions and reducer
// export const { updateFormData, resetFormData } = otpSlice.actions;
// export default otpSlice.reducer;
