import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload
    },
    decrement: (state, action) => {
      state.value -= action.payload
    }
  }
})