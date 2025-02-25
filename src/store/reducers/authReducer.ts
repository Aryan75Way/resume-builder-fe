import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  isLoggedIn: boolean;
  email: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
  email: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state:AuthState, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email

    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
