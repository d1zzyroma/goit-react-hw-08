import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, registerThunk } from "./authOps";

const initialState = {
    user: {
        name:"",
        email:"",
    },
    token: "",
    isLoggeIn: false,
}


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
    }
}) 


export const authReducer = slice.reducer;