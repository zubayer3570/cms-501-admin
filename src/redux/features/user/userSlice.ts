import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        loginReducer: (state, action) => {
            return action.payload
        },
        logoutReducer: () => {return null}
    }
})

export const { loginReducer, logoutReducer } = userSlice.actions
export default userSlice.reducer