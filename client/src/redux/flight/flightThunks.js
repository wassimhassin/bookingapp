import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllFlight } from '../../services/flights/flight';

export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async (_, thunkAPI) => {
    try {
      const response = await getAllFlight();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);