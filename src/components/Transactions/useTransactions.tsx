import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Transaction } from "../Transaction/Transaction";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { transactionsSlice } from "../../redux/features/transactions/transactionsSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AxiosResponse } from "axios";
import { ITransaction } from "../Transaction/transaction.type";
import { updateCard } from "../../helpers/updateCard";

export const useTransaction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch  = useAppDispatch();
  const { transactions } = useAppSelector(state => state);

  useEffect(() => {    
    const fetch = async () => {
      try {
        const response: AxiosResponse<ITransaction[]>  = await api.get('transactions', {
          headers: { Authorization: localStorage.getItem('token') }
        })
        dispatch(transactionsSlice.actions.set(response.data));
        updateCard(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [])

  const Transactions = transactions?.map((transaction) => {
    return (
      <Transaction key={transaction.id} {...transaction} />
    )
  })

  return { isOpen, setIsOpen, Transactions }
}