import { ArrowArcRight, ArrowArcLeft } from "phosphor-react"
import * as S from './transaction.styles'
import { parsePrice } from "../../helpers/parsePrice"

export interface TransactionProps {
  type: 'EXPENSE' | 'INCOME'
  name: string
  category: string
  value: number
}

export const Transaction = ({ type, category, name, value }: TransactionProps) => {

  return (
    <S.Wrapper>
      <S.Aside>
        <S.Icon src="svg/Hamburger.svg" alt="Hamburger" />
        <S.Section>
          <S.Name>{name}</S.Name>
          <S.Category>{category}</S.Category>
        </S.Section>
      </S.Aside>
      <S.Price type={type}>{type == 'EXPENSE' ? <ArrowArcLeft/> : <ArrowArcRight/>}${parsePrice(value)}</S.Price>
    </S.Wrapper>
  )
}
