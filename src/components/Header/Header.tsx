import { useCallback, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as S from './header.styles'

export const Header = () => {

  const { handleAuthentication } = useContext(AuthContext);

  const logout = useCallback(() => {
    handleAuthentication(false);
    localStorage.removeItem('token');
  }, [])

  return (
    <S.Header>
      <h2>XPENSES</h2>
      <S.Logout onClick={logout}>Logout</S.Logout>
    </S.Header>
  )
}
