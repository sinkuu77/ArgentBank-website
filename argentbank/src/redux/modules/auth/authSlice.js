
import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userProfile } from './authAction'

const userToken = localStorage.getItem('userToken') 
        ? localStorage.getItem('userToken') : null


const initialState = {
    loading: false,
    userInfo: null,
    firstName: null,
    lastName: null,
    userToken,
    error: null,
    success: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        }
    },
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
        },
        [userProfile.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload.body
            state.firstName = payload.body.firstName
            state.lastName = payload.body.lastName
        },
        [userProfile.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})


export const { logout } = authSlice.actions
export default authSlice.reducer