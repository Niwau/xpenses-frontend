import { createContext, useReducer } from "react"
import { Children } from "../types/auth.types"

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

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      { children }
    </CardContext.Provider>
  )
}
