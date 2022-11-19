import { createSlice } from "@reduxjs/toolkit";
import { Appearance } from "react-native";

export interface UIState {
  darkMode: boolean;
}

const systemMode = Appearance.getColorScheme();

const initialState: UIState = {
  darkMode: systemMode === "dark",
};

export const uiSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;

const uiReducer = uiSlice.reducer;
export default uiReducer;
