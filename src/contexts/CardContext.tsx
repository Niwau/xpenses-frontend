import { createContext, useCallback, useReducer } from "react"
import { Children } from "../types/auth.types"
import { ITransaction } from "../components/Transaction/transaction.type"
import { parsePrice } from "../helpers/parsePrice"

interface Action {
  type:
    'balance/increment' | 
    'balance/decrement' | 
    'expenses/increment'| 
    'expenses/decrement'| 
    'incomes/increment' | 
    'incomes/decrement'
  payload: number
}

interface CardContextInterface {
  dispatch: (action: Action) => void
  state: typeof initialState
  calcPrice: (transactions: ITransaction[]) => void
}

const initialState = {
  incomes: 0,
  expenses: 0,
  balance: 0
}

export const CardContext = createContext<CardContextInterface>({} as CardContextInterface)

const reducer = (state: typeof initialState, action: Action) => {

  switch(action.type) {
    case "balance/decrement": return {...state, balance: state.balance - action.payload }
    case "balance/increment": return {...state, balance: state.balance + action.payload }
    case "expenses/decrement": return {...state, expenses: state.expenses - action.payload }
    case "expenses/increment": return {...state, expenses: state.expenses +  action.payload }
    case "incomes/decrement": return {...state, incomes: state.incomes - action.payload }
    case "incomes/increment": return {...state, incomes: state.incomes + action.payload }
    default: return state
  }

}

export const CardContextProvider = ({ children } : Children) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const calcPrice = useCallback((transactions: ITransaction[]) => {
    transactions.forEach(transaction => {
      switch(transaction.type) {
        case "EXPENSE":
          dispatch({ type: 'expenses/increment', payload: parsePrice(transaction.value) });
          dispatch({ type: 'balance/decrement', payload: parsePrice(transaction.value) });
        break;
        case "INCOME":
          dispatch({ type: 'incomes/increment', payload: parsePrice(transaction.value) });
          dispatch({ type: 'balance/increment', payload: parsePrice(transaction.value) });
        break;
      }
    })
  }, [])

  return (
    <CardContext.Provider value={{ state, dispatch, calcPrice }}>
      { children }
    </CardContext.Provider>
  )
}
