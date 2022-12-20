import { ArrowArcRight, ArrowArcLeft } from "phosphor-react"
import { parsePrice } from "../../helpers/parsePrice"
import * as S from './transaction.styles'
import { useCallback } from "react"
import { api } from "../../services/api"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { transactionsSlice } from "../../redux/features/transactions/transactionsSlice"
import { updateCardDelete } from "../../helpers/updateCard"

export interface TransactionProps {
  type: 'EXPENSE' | 'INCOME'
  name: string
  category: string
  value: number,
  id: number
}

export const Transaction = ({ type, category, name, value, id }: TransactionProps) => {

  const dispatch = useAppDispatch();

  const removeTransaction = useCallback( async (id: number) => {
    try {
      const response = await api.delete(`/transactions/${id}`, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      dispatch(transactionsSlice.actions.remove(id));
      updateCardDelete([response.data]);
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <S.Wrapper>
      <S.Aside>
        <S.Section>
          <S.Name>{name}</S.Name>
          <S.Category>{category}</S.Category>
        </S.Section>
      </S.Aside>
      <S.Footer>
        <S.Price type={type}>{type == 'EXPENSE' ? <ArrowArcLeft/> : <ArrowArcRight/>}${parsePrice(value)}</S.Price>
        <S.Trash onClick={() => removeTransaction(id)}/>
      </S.Footer>
    </S.Wrapper>
  )
}
