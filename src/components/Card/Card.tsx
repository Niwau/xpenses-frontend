import * as S from './card.styles'

export const Card = () => {
  return (
    <S.Card>
      <S.Section>
        <S.Title>BALANCE</S.Title>
        <S.Price>$0</S.Price>
      </S.Section>
      <S.Footer>
        <S.Section>
          <S.Title>EXPENSES</S.Title>
          <S.Price>$0</S.Price>
        </S.Section>
        <S.Section>
          <S.Title>INCOMES</S.Title>
          <S.Price>$0</S.Price>
        </S.Section>
      </S.Footer>
    </S.Card>
  )
}
