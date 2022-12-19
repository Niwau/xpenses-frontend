import { createContext, useCallback, useState } from "react";
import { Children } from "../types/auth.types";
import { ITransaction } from "../components/Transaction/transaction.type";

interface ITransactionsContext {
  transactions: ITransaction[] | null
  handleTransaction: (transaction: ITransaction[]) => void
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext);

export const TransactionsProvider = ({ children } : Children) => {

  const [transactions, setTransactions] = useState<ITransaction[] | null>(null);

  const handleTransaction = useCallback((transactions: ITransaction[]) => {
    setTransactions(transactions)
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, handleTransaction }}>
      { children }
    </TransactionsContext.Provider>
  )
}