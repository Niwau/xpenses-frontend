import { Transaction } from '../Transaction/Transaction'
import * as S from './transactions.styles'

export const Transactions = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Transactions</S.Title>
        <S.Span>+ New transaction</S.Span>
      </S.Header>
      <main>
        <Transaction type='expense' category='Food' name='Mc Donalds' price={'12,39'}/>
      </main>
    </S.Wrapper>
  )
}
