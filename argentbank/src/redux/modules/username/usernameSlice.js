import { createSlice } from '@reduxjs/toolkit'
import { setUserName } from './usernameAction'

const initialState = {
    loading: false,
    displayForm: false,
    username: null,
    nameError: null,
    nameSuccess: null
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
        },
        resetNameSuccess: (state) => {
            state.nameSuccess = ''
        }
    },
    extraReducers: {
        [setUserName.pending]: (state) => {
            state.loading = true
            state.nameError = null
        },
        [setUserName.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.username = payload
            state.nameSuccess = 'Username is saved'
        },
        [setUserName.rejected]: (state, { payload }) => {
            state.loading = false
            state.nameError = payload
        }
    }

})

export const { display, cancel, resetNameSuccess } = usernameSlice.actions
export default usernameSlice.reducer