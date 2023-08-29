import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const url = 'http://localhost:3001/api/v1'

export const userName = createAsyncThunk(
    'user/name',
    async ({ username }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer' + localStorage.getItem('userToken'),
                },
            }
            const response = await axios.put(`${url}/user/profile`, {username},
            config
            )
            return response.data
        }
        catch (error) {
            if(error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        }
    
)