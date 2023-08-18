import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const url = 'http://localhost:3001/api/v1'

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${url}/user/login`,
                { email, password },
                config
            )
            localStorage.setItem('userToken', data.body.token)
            return data
        } catch (error) {
            if(error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)