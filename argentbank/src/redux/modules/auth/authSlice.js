
import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authAction'

const userToken = localStorage.getItem('userToken') 
        ? localStorage.getItem('userToken') : null

const initialEmail = localStorage.getItem('email') ? localStorage.getItem('email') : null

const initialState = {
    loading: false,
    userToken,
    checked: false,
    email: initialEmail,
    errorLogin: null,
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
            state.errorLogin = null
        },
        setEmail: (state, { payload }) => {
            state.email = payload
        },
        remember: (state, { payload }) => {
            state.checked = payload
            if(!state.checked) {
                state.email = null
                localStorage.removeItem('email')
            } localStorage.setItem('email', state.email)
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
            if(!state.checked) {
                localStorage.removeItem('email')
                state.email = initialEmail
            }
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


export const { logout, remember, setEmail } = authSlice.actions
export default authSlice.reducer