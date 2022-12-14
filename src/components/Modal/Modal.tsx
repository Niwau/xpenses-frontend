import { createPortal } from 'react-dom'
import * as S from './modal.styles'
import * as F from '../../styles/Form.styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ModalProps } from '../../types/modal.types'
import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import { AxiosResponse } from 'axios'
import { ITransaction } from '../Transaction/transaction.type'
import { updateCard } from '../../helpers/updateCard'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { transactionsSlice } from '../../redux/features/transactions/transactionsSlice'

interface ModalValues {
  name: string,
  category: string,
  value: string,
  type: 'EXPENSE' | 'INCOME'
}

export const Modal = ({ setIsOpen } : ModalProps) => {

  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<ModalValues>();

  const onSubmit: SubmitHandler<ModalValues> = useCallback(async (data) => {
    try {
      const response: AxiosResponse<ITransaction> = await api.post('/transactions', {
        ...data, 
        value: parseFloat(data.value) * 100
      }, {
        headers: { Authorization: localStorage.getItem('token')}
      })
      toast.success('New transaction added!')
      updateCard([response.data]);
      dispatch(transactionsSlice.actions.add(response.data))
    } catch (error) {
      toast.error('An error occured');
      console.log(error)
    }
    setIsOpen(false)
  }, [])

  return (
    createPortal(
      <S.Wrapper key={'modal'} onClick={() => setIsOpen(false)}>
        <F.Form onSubmit={handleSubmit(onSubmit)} onClick={e => e.stopPropagation()}>
          <S.Title>New transaction</S.Title>
          <F.Section>
            <F.Label>Name</F.Label>
            <F.Input {...register('name')} required/>
          </F.Section>
          <F.Section>
            <F.Label>Category</F.Label>
            <F.Input {...register('category')} required/>
          </F.Section>
          <F.Section>
            <F.Label>Price</F.Label>
            <F.Input {...register('value')} type='number' step={0.01} min={0} required/>
          </F.Section>
          <S.Section>
            <F.Label>Type</F.Label>
            <S.RadioGroup>
              <S.Radio {...register('type')} id="expense"value='EXPENSE' required/>
              <S.RadioLabel htmlFor="expense">Expense</S.RadioLabel>
            </S.RadioGroup>
            <S.RadioGroup>
              <S.Radio {...register('type')} id="income" value='INCOME' required/>
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
