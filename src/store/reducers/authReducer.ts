import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  isLoggedIn: boolean;
  email: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: localStorage.getItem("email") ? true : false,
  email: localStorage.getItem("email") || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      localStorage.setItem("email", state.email);
    },
    logout: (state: AuthState) => {
      state.isLoggedIn = false;
      state.email = "";
      localStorage.removeItem("email");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
