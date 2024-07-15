import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    name: string,
    email: string
}
export interface AuthState {
    token?: string | null,
    user?: UserState | null
}

const initialState: AuthState = {
    token: localStorage.getItem('ACCESS_TOKEN') || null,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        storeUser: (state, action: PayloadAction<UserState | null>) => {
            state.user = action.payload
        },
        storeToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload

            if(action.payload){
                localStorage.setItem('ACCESS_TOKEN', action.payload);
            } else {
                localStorage.removeItem('ACCESS_TOKEN');
            }
        }
    }
})


export const { storeToken, storeUser } = authSlice.actions

export const authReducer = authSlice.reducer
export default authReducer;