
import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userProfile } from './authAction'

const userToken = localStorage.getItem('userToken') 
        ? localStorage.getItem('userToken') : null

const initialEmail = localStorage.getItem('email') || ''


const initialState = {
    loading: false,
    userToken,
    checked: false,
    email: initialEmail,
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
            state.userToken = null
            state.error = null
        },
        setEmail: (state, { payload }) => {
            state.email = payload
        },
        remember: (state, { payload }) => {
            state.checked = payload
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
            if(state.checked) {
                localStorage.setItem('userToken', userToken)
            }
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
            state.firstName = payload.body.firstName
            state.lastName = payload.body.lastName
        },
        [userProfile.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})


export const { logout, remember, getEmail } = authSlice.actions
export default authSlice.reducer