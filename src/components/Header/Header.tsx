import * as S from './header.styles'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { authSlicer } from '../../redux/features/auth/authSlicer';
import { useCallback } from 'react';
import { resetCard } from '../../helpers/resetCard';

export const Header = () => {

  const dispatch = useAppDispatch();

  const logout = useCallback(() => {
    dispatch(authSlicer.actions.logout());
    resetCard();
  }, [])

  return (
    <S.Header>
      <h2>XPENSES</h2>
      <S.Logout onClick={logout}>Logout</S.Logout>
    </S.Header>
  )
}
