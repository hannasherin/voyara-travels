import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";
const initialState={
    destinations:[],
    isloading:false,
    error:'',
}

export const fetchDestinations=createAsyncThunk(
    'destinations/fetchDestinations',
    async(_,{rejectWithValue})=>{
       try {
        const response=await api.get('/destinations')
        return response.data
        
       } catch (error) {
        return rejectWithValue('No Destination Found')
       }
    }
)

const destinationSlice=createSlice({
    name:'destinations',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder

        .addCase(fetchDestinations.pending,(state,action)=>{
            state.isloading=true
            state.error=''
        })
        .addCase(fetchDestinations.fulfilled,(state,action)=>{
            state.isloading=false
            state.error=''
            state.destinations=action.payload
        })
        .addCase(fetchDestinations.rejected,(state,action)=>{
            state.isloading=false
            state.error=action.payload
            state.destinations=[]
        })
    }
})
export default destinationSlice.reducer
