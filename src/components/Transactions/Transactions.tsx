import { useEffect, useState } from 'react'
import { Transaction } from '../Transaction/Transaction'
import * as S from './transactions.styles'
import { Modal } from '../Modal/Modal';
import { api } from '../../services/api';

interface Transaction {
  id: number
  category: string
  name: string
  value: number
  type: 'EXPENSE' |'INCOME'
}

export const Transactions = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  useEffect(() => {
    api.get('transactions', {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
    .then((res) => setTransactions(res.data))
  }, [])

  const Transactions = transactions?.map(transaction => (
    <Transaction
      key={transaction.id}
      category={transaction.category}
      name={transaction.name}
      value={transaction.value}
      type={transaction.type}
    />
  ))

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Transactions</S.Title>
        <S.Button onClick={() => setIsOpen(true)}>+ New transaction</S.Button>
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
      </S.Header>
      <S.Section>
        { Transactions }
      </S.Section>
    </S.Wrapper>
  )
}
