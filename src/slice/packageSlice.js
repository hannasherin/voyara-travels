import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";
const initialState = {
    packages: [],
    isloading: false,
    error: '',
}

export const fetchPackages = createAsyncThunk(
    'packages/fetchPackages',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/packages')
            return response.data
        } catch (error) {
            return rejectWithValue('No Package Found')
        }
    }
)

const packageSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchPackages.pending, (state, action) => {
                state.isloading = true
                state.error = ''
            })
            .addCase(fetchPackages.fulfilled, (state, action) => {
                state.isloading = false
                state.error = ''
                state.packages = action.payload
            })
            .addCase(fetchPackages.rejected, (state, action) => {
                state.isloading = false
                state.error = action.payload
                state.packages = []
            })


    }
})

export default packageSlice.reducer