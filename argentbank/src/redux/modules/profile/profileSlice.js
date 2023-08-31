import { createSlice } from '@reduxjs/toolkit'
import { userProfile } from './profileAction'

const initialState = {
    loading: false,
    firstName: '',
    lastName: '',
    userName: '',
    errorProfile: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: {
        [userProfile.pending]: (state) => {
            state.loading = true
        },
        [userProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.firstName = payload.body.firstName
            state.lastName = payload.body.lastName
            state.userName = payload.body.userName
        },
        [userProfile.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorProfile = payload
        }
    }
})

export default profileSlice.reducer