const APiUrl = "http://127.0.0.1:8000/api/v1/";
import axios from "axios";
const signUp = `${APiUrl}signup/`;
const signIn = `${APiUrl}login/`;
const ForgotPassword = `${APiUrl}forgot-password/`;
const ResetPassword = `${APiUrl}reset-password/`;

const getApiData = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data; // Return only relevant data
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { success: false, message: error.message };
  }
};

// Function to send data to API (POST request)
const postData = async (apiUrl, data) => {
  console.log("data", data, apiUrl);
  try {
    const response = await axios.post(apiUrl, data);
    console.log("hlo", response);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error.message);
    return { success: false, message: error.message };
  }
};

// Function to fetch data by ID (GET request)
const getDataWithId = async (apiUrl, id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by ID:", error.message);
    return { success: false, message: error.message };
  }
};

// ===========================SignUp ===================
export const Resister = (data) => {
  const apiUrl = signUp;
  return postData(apiUrl, data);
};

// ===========================Forgot Password ===================
export const forgotPassword = (data) => {
  const apiUrl = ForgotPassword;
  return postData(apiUrl, data);
};

// ===========================Reset Password ===================
export const resetPassword = (data) => {
  const apiUrl = ResetPassword;
  return postData(apiUrl, data);
};

//========================signin ==========================
export const login = (data) => {
    const apiUrl = signIn;
    return postData(apiUrl, data)
}