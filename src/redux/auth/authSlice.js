import { createSlice } from "@reduxjs/toolkit"
import { getMeThunk, loginThunk, logoutThunk, registerThunk } from "./operations";


const initialState = {
    user: {
        name: "",
        email: "",
    },
    token: "",
    isLoggeIn: false,
};



const slice = createSlice({
    name:"auth",
    initialState,
    extraReducers: builder =>{
        builder
        .addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggeIn = true;
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggeIn = true;
        })
        .addCase(logoutThunk.fulfilled, () => {
            return initialState;
        })
        .addCase(getMeThunk.fulfilled, (state, action) => {
            state.isLoggeIn = true;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
        })
    }
}) 


export const authReducer = slice.reducer;