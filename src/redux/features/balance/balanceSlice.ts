import { createSlice } from '@reduxjs/toolkit'
import { decrement, increment, reset } from '../../reducers/reducers'

const initialState = {
  value: 0
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    increment: increment,
    decrement: decrement,
    reset: reset
  }
})

