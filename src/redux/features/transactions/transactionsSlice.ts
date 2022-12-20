import { createSlice } from '@reduxjs/toolkit'
import { ITransaction } from '../../../components/Transaction/transaction.type'

const initialState: ITransaction[] = []

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    set(state, action) {
      state.splice(0, state.length, ...action.payload);
    }
  }
})