import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../contexts/CardContext";
import { api } from "../../services/api";
import { Transaction } from "../Transaction/Transaction";
import { ITransaction } from "../Transaction/transaction.type";
import { parsePrice } from "../../helpers/parsePrice";

export const useTransaction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState<ITransaction[] | null>(null);
  const { dispatch } = useContext(CardContext);

  useEffect(() => {
    (async () => {
      const response = await api.get('transactions', { headers: { Authorization: localStorage.getItem('token') } })
      setTransactions(response.data)
      getPrice(response.data)
    })()
  }, [])

  const getPrice = (transactions: ITransaction[]) => {
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
  }

  const Transactions = transactions?.map(transaction => {
    return (
      <Transaction
        key={transaction.id}
        category={transaction.category}
        name={transaction.name}
        value={transaction.value}
        type={transaction.type}
      />
    )
  })

  return { isOpen, setIsOpen, Transactions  }
}