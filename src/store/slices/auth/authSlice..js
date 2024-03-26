import {createSlice} from "@reduxjs/toolkit";

const iniciarLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
}

export const authSlice = createSlice({
    name:'auth',
    initialState:iniciarLogin,
    reducers: {
        onLogin: (state, action)=> {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user;
        },
        onLogout :(state,action)=> {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
        }
    }
});

export const {
    onLogin,
    onLogout } = authSlice.actions;