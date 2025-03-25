// import { createSlice } from '@reduxjs/toolkit';
// import { forgotPassword, resetPassword } from "../../../Services/ApiServices/ApiService";
// import { toast } from 'react-toastify';

// const initialState = {
//   email: '',
//   otp: '',
//   isOtpVerified: false,
//   isLoading: false,
//   isOtpModalOpen: false,
//   newPassword: '',
//   confirmPassword: '',
//   error: null,
// };

// const forgotPasswordSlice = createSlice({
//   name: 'forgotPassword',
//   initialState,
//   reducers: {
//     setEmail(state, action) {
//       state.email = action.payload;
//     },
//     setOtp(state, action) {
//       state.otp = action.payload;
//     },
//     setIsOtpVerified(state, action) {
//       state.isOtpVerified = action.payload;
//     },
//     setIsLoading(state, action) {
//       state.isLoading = action.payload;
//     },
//     setIsOtpModalOpen(state, action) {
//       state.isOtpModalOpen = action.payload;
//     },
//     setNewPassword(state, action) {
//       state.newPassword = action.payload;
//     },
//     setConfirmPassword(state, action) {
//       state.confirmPassword = action.payload;
//     },
//     setError(state, action) {
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(forgotPassword.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(forgotPassword.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.otp = action.payload.otp;
//       state.isOtpModalOpen = true;
//       toast.success('OTP sent successfully!');
//     });
//     builder.addCase(forgotPassword.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error.message;
//       toast.error('Error sending OTP!');
//     });
//     builder.addCase(resetPassword.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(resetPassword.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isOtpVerified = true;
//       toast.success('Password reset successfully!');
//     });
//     builder.addCase(resetPassword.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error.message;
//       toast.error('Error resetting password!');
//     });
//   },
// });

// export const {
//   setEmail,
//   setOtp,
//   setIsOtpVerified,
//   setIsLoading,
//   setIsOtpModalOpen,
//   setNewPassword,
//   setConfirmPassword,
//   setError,
// } = forgotPasswordSlice.actions;

// export default forgotPasswordSlice.reducer;