import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  ticketList: [],
  filter: [],
  currency: null,
};

export const loadTickets = createAsyncThunk(
  '@@tickets/loading',
  () => {
    return axios.get('http://localhost:4000/tickets')
  })

const ticketsSlice = createSlice({
  name: '@@tickets',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const chekedArr = Object.keys(action.payload);
      const filteredArr = chekedArr.filter((item) => action.payload[item]);
      const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
      }

      if (filteredArr.includes('all')) {
        state.filter = [0, 1, 2, 3];
        return;
      } else {
        state.filter = filteredArr.map((num) => numbers[num]);
      }
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTickets.fulfilled, (state, action) => {
        state.ticketList = action.payload.data;
      })
  },
});

export const { setFilter, setCurrency } = ticketsSlice.actions;
const ticketsReducer = ticketsSlice.reducer;
export default ticketsReducer;