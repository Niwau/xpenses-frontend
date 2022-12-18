import { useContext } from 'react';
import { CardContext } from '../../contexts/CardContext'
import * as S from './card.styles'

export const Card = () => {

  const { state } = useContext(CardContext);

  return (
    <S.Card>
      <S.Section>
        <S.Title>BALANCE</S.Title>
        <S.Price>${state.balance.toFixed(2)}</S.Price>
      </S.Section>
      <S.Footer>
        <S.Section>
          <S.Title>EXPENSES</S.Title>
          <S.Price>${state.expenses}</S.Price>
        </S.Section>
        <S.Section>
          <S.Title>INCOMES</S.Title>
          <S.Price>${state.incomes}</S.Price>
        </S.Section>
      </S.Footer>
    </S.Card>
  )
}
