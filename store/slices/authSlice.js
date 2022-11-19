import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null,
  isLoading: true,
  token: "",
  authenticated: false,
};

// Get user from AsyncStorage
export const tryLocalSignIn = createAsyncThunk("auth/localSignIn", async () => {
  const authStateString = await AsyncStorage.getItem(`IOT4H_AUTH`);

  if (!authStateString) return { ...initialState, isLoading: false };
  return JSON.parse(authStateString);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.token = "";
      state.authenticated = false;
    },
    tempLogin: (state) => {
      state.user = {};
      state.isLoading = false;
      state.token = "";
      state.authenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tryLocalSignIn.fulfilled, (state, action) => {
      const { authenticated, isLoading, token, user } = action.payload;
      state.authenticated = authenticated;
      state.isLoading = isLoading;
      state.token = token;
      state.user = user;
    });
  },
});

export const { tempLogin, logout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
