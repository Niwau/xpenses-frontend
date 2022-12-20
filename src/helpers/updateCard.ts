import { ITransaction } from "../components/Transaction/transaction.type";
import { balanceSlice } from "../redux/features/balance/balanceSlice";
import { expensesSlice } from "../redux/features/expenses/expensesSlice";
import { incomesSlice } from "../redux/features/incomes/incomesSlice";
import { store } from "../redux/store";

export const updateCard = (transactions: ITransaction[]) => {
  transactions.forEach(trans => {
    switch(trans.type) {
      case "EXPENSE":
        store.dispatch(expensesSlice.actions.increment(trans.value))
        store.dispatch(balanceSlice.actions.decrement(trans.value))
        break;
      case "INCOME":
        store.dispatch(incomesSlice.actions.increment(trans.value))
        store.dispatch(balanceSlice.actions.increment(trans.value))
      break;
    }
  })
}

export const updateCardDelete = (transactions: ITransaction[]) => {
  transactions.forEach(trans => {
    switch(trans.type) {
      case "EXPENSE":
        store.dispatch(expensesSlice.actions.decrement(trans.value))
        store.dispatch(balanceSlice.actions.increment(trans.value))
        break;
      case "INCOME":
        store.dispatch(incomesSlice.actions.decrement(trans.value))
        store.dispatch(balanceSlice.actions.decrement(trans.value))
      break;
    }
  })
}