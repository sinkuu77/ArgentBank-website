
import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authAction'

const userToken = localStorage.getItem('userToken') 
        ? localStorage.getItem('userToken') : null




const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userToken = payload.body.token
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})


export default authSlice.reducer