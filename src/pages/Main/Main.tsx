import { Card } from '../../components/Card/Card';
import { Login } from '../../components/Forms/Login/Login';
import { Header } from '../../components/Header/Header';
import { Transactions } from '../../components/Transactions/Transactions';
import * as S from './main.styles'
import { useAppSelector } from '../../hooks/useAppSelector';

export const Main = () => {

  const { auth } = useAppSelector(state => state);

  if (!auth.isAuthenticated) {
    return <Login/>
  }

  return (
    <>
      <Header/>
      <S.Wrapper>
        <div>
          <Card/>
          <Transactions/>
        </div>
      </S.Wrapper>
    </>
  )
}
