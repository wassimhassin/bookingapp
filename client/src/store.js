import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './redux/flight/flightSlice';

const store = configureStore({
  reducer: {
    flights: flightReducer,
  },
});

export default store;
