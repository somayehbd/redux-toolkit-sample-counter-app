import { createSlice } from '@reduxjs/toolkit'

const counterSliceWithAction = createSlice({
    name: 'counterWithAction',
    initialState: {
      value: 0
    },
    reducers: {
        incrementedWithAction: (state,action) => {
        state.value = state.value + action.payload
      },
      decrementedWithAction: (state,action) => {
        state.value = state.value - action.payload
      }
    }
  })
  
  export const { incrementedWithAction, decrementedWithAction } = counterSliceWithAction.actions
  export default counterSliceWithAction;