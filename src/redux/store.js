import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer
  }
})
export default store;