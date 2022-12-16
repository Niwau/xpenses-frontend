import { createPortal } from 'react-dom'
import * as S from './modal.styles'
import * as F from '../../styles/Form.styles'

export const Modal = () => {
  return (
    createPortal(
      <S.Wrapper>
        <F.Form>
          <S.Title>New transaction</S.Title>
          <F.Section>
            <F.Label>Name</F.Label>
            <F.Input/>
          </F.Section>
          <F.Section>
            <F.Label>Category</F.Label>
            <F.Input/>
          </F.Section>
          <F.Section>
            <F.Label>Price</F.Label>
            <F.Input type='number' step={0.01} min={0}/>
          </F.Section>
          <S.Section>
            <F.Label>Type</F.Label>
            <S.RadioGroup>
              <S.Radio id="expense" name='type' value='expense'/>
              <S.RadioLabel htmlFor="expense">Expense</S.RadioLabel>
            </S.RadioGroup>
            <S.RadioGroup>
              <S.Radio id="income" name='type' value='income'/>
              <S.RadioLabel htmlFor="income">Income</S.RadioLabel>
            </S.RadioGroup>
          </S.Section>
          <S.Button>Add new transaction</S.Button>
        </F.Form>
      </S.Wrapper>,
      document.getElementById('root')!
    )
  )
}
