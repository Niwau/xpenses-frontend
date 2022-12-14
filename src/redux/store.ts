import { configureStore } from '@reduxjs/toolkit'
import { authSlicer } from './features/auth/authSlicer'
import { balanceSlice } from './features/balance/balanceSlice'
import { expensesSlice } from './features/expenses/expensesSlice'
import { incomesSlice } from './features/incomes/incomesSlice'
import { transactionsSlice } from './features/transactions/transactionsSlice'

export const store = configureStore({
  reducer: { 
    auth: authSlicer.reducer,
    balance: balanceSlice.reducer,
    expenses: expensesSlice.reducer,
    incomes: incomesSlice.reducer,
    transactions: transactionsSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch