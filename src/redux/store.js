import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import counterSliceWithAction from './counterSliceWithAction';

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    counterSliceWithAction: counterSliceWithAction.reducer
  }
})
export default store;