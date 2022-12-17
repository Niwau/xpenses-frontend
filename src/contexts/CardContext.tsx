import { createContext, useCallback, useState } from "react"
import { Children } from "../types/auth.types"

interface defaultValues {
  incomes: number
  expenses: number
  balance: number
}

interface CardContextInterface {
  status: defaultValues
  handleStatus: (status: defaultValues) => void
}

export const CardContext = createContext<CardContextInterface | null>(null)

export const CardContextProvider = ({ children } : Children) => {

  const [status, setStatus] = useState({} as defaultValues);

  const handleStatus = useCallback(
    (status: defaultValues) => { setStatus(status) } 
  ,[])

  return (
    <CardContext.Provider value={{ status, handleStatus }}>
      { children }
    </CardContext.Provider>
  )
}
