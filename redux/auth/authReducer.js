import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        name: null,
        email: null
    },
    reducers: {
        updateUserProfile: (state, { payload }) => ({
            ...state,
            name: payload.name
        })
    }
})