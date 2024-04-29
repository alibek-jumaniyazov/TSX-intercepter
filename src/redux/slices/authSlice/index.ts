import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../../types/redux";


const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
};

export const authState = createSlice({
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
            });
        },
    },
});
