import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './tickets-slice.js';

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;