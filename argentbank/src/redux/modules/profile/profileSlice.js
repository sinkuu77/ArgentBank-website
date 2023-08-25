import { createSlice } from '@reduxjs/toolkit'
import { userProfile } from './profileAction'

const initialState = {
    loading: false,
    firstName: '',
    lastName: '',
    error: null,
    success: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: {
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

export default profileSlice.reducer