import { createSlice } from '@reduxjs/toolkit'
import { setUserName } from './usernameAction'

const initialState = {
    loading: false,
    displayForm: false,
    username: null,
    error: null,
    success: null
}

export const usernameSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        display: (state) => {
            state.displayForm = true
        },
        cancel: (state) => {
            state.displayForm = false
        }
    },
    extraReducers: {
        [setUserName.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [setUserName.fulfilled]: (state, { payload }) => {
            console.log({payload})
            state.loading = false
            state.username = payload
            state.success = 'Username is saved'
        },
        [setUserName.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }

})

export const { display, cancel, clickCancel, clickSave } = usernameSlice.actions
export default usernameSlice.reducer