import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../../types/redux";


const initialState: AuthState = {
    accessToken:  null,
    refreshToken: null,
    roles: []
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, { payload }: PayloadAction<AuthState>) => {
            return (state = payload);
        },
        clearAuth: (state) => {
            return (state = {
                accessToken: null,
                refreshToken: null,
                roles: []
            });
        },
    },
});

export const { setAuth, clearAuth } = authSlice.actions;
