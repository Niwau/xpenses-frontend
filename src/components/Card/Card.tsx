import { parsePrice } from '../../helpers/parsePrice';
import { useAppSelector } from '../../hooks/useAppSelector';
import * as S from './card.styles'

export const Card = () => {

  const { balance, expenses, incomes } = useAppSelector(state => state); 

  return (
    <S.Card>
      <S.Section>
        <S.Title>BALANCE</S.Title>
        <S.Price>${parsePrice(balance.value)}</S.Price>
      </S.Section>
      <S.Footer>
        <S.Section>
          <S.Title>EXPENSES</S.Title>
          <S.Price>${parsePrice(expenses.value)}</S.Price>
        </S.Section>
        <S.Section>
          <S.Title>INCOMES</S.Title>
          <S.Price>${parsePrice(incomes.value)}</S.Price>
        </S.Section>
      </S.Footer>
    </S.Card>
  )
}
