import * as S from './transactions.styles'
import { Modal } from '../Modal/Modal';
import { useTransaction } from './useTransactions';

export const Transactions = () => {

  const { isOpen, setIsOpen, Transactions } = useTransaction();

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Transactions</S.Title>
        <S.Button onClick={() => setIsOpen(true)}>+ New transaction</S.Button>
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
      </S.Header>
      <S.Section>
        { Transactions }
      </S.Section>
    </S.Wrapper>
  )
}
