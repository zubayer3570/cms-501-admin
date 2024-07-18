import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: null,
    reducers: {
        setLoggedInUserData: (state, action) => {
            state = action.payload
        }
    }
})

export const { setLoggedInUserData } = loginSlice.actions

export default loginSlice.reducer