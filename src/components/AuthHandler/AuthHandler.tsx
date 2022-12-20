import { useEffect } from "react"
import { Children } from "../../types/auth.types"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { authSlicer } from "../../redux/features/auth/authSlicer";

export const AuthHandler = ({ children } : Children ) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(authSlicer.actions.authenticate());
    }

  })

  return (
    <>
      { children }
    </>
  )
}
