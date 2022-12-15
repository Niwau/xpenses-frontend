import { ArrowArcRight, ArrowArcLeft } from "phosphor-react"
import * as S from './transaction.styles'

export interface TransactionProps {
  type: 'expense' | 'income'
  name: string
  category: string
  price: string
}

export const Transaction = ({ type, category, name, price }: TransactionProps) => {

  return (
    <S.Wrapper>
      <S.Aside>
        <S.Icon src="svg/Hamburger.svg" alt="Hamburger" />
        <S.Section>
          <S.Name>{name}</S.Name>
          <S.Category>{category}</S.Category>
        </S.Section>
      </S.Aside>
      <S.Price type={type}>{type == 'expense' ? <ArrowArcLeft/> : <ArrowArcRight/>}${price}</S.Price>
    </S.Wrapper>
  )
}
