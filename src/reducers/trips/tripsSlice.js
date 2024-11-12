// actions/bookingActions.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tripsList: [],
  loading: false,
  error: null,
};

const API = import.meta.env.VITE_URL_API;

export const directBooking = createAsyncThunk(
  'directBooking/postDirectBooking',
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/bookings/select/vehicle`, bookingData);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: 'Network error occurred' });
    }
  }
);

const tripsSlice = createSlice({
  name: 'tripsList',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(directBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(directBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.tripsList = action.payload;
        state.error = null;
      })
      .addCase(directBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message
      });
  },
});

export const { clearError } = tripsSlice.actions;
export default tripsSlice.reducer;
