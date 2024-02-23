import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    loging: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loging, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
