import { createAsyncThunk,createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../api/axios";
const initialState={
    bookings:[],
    isloading:false,
    error:'',
}

// save booking 
export const addBooking=createAsyncThunk(
    'booking/addBooking',
    async(bookingdata,{rejectWithValue})=>{
        try {
            const response=await api.post('/bookings',bookingdata)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to Save booking")
        }
    }
)

// fetch all bookings 
export const fetchBooking=createAsyncThunk(
    'booking/fetchBooking',
    async(_,{rejectWithValue})=>{
        try {
            const response=await api.get('/bookings')
            return response.data
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to Fetch bookings"
            )
        }
    }
)

const bookingSlice=createSlice({
    name:"booking",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //add booking
        .addCase(addBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings.push(action.payload);
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch bookings
      .addCase(fetchBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    }
})

export default bookingSlice.reducer;