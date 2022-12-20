import { balanceSlice } from "../redux/features/balance/balanceSlice";
import { expensesSlice } from "../redux/features/expenses/expensesSlice";
import { incomesSlice } from "../redux/features/incomes/incomesSlice";
import { transactionsSlice } from "../redux/features/transactions/transactionsSlice";
import { store } from "../redux/store"

export const resetCard = () => {
  store.dispatch(balanceSlice.actions.reset())
  store.dispatch(incomesSlice.actions.reset())
  store.dispatch(expensesSlice.actions.reset())
  store.dispatch(transactionsSlice.actions.set([]))
}