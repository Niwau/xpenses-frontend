import { useState } from 'react'
import { Transaction } from '../Transaction/Transaction'
import * as S from './transactions.styles'
import { Modal } from '../Modal/Modal';

export const Transactions = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Transactions</S.Title>
        <S.Button>+ New transaction</S.Button>
        <Modal/>
      </S.Header>
      <main>
        <Transaction type='expense' category='Food' name='Mc Donalds' price={'12,39'}/>
      </main>
    </S.Wrapper>
  )
}
