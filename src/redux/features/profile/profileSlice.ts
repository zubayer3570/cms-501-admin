import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const profileSlice: any = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    addProfile: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    removeProfile: (state) => {
        state = {};
      },
  },
});
export const { addProfile, removeProfile } = profileSlice.actions;
export default profileSlice.reducer;