import React, { useContext } from 'react'
import { Card } from '../components/Card/Card';
import { Login } from '../components/Forms/Login/Login';
import { Header } from '../components/Header/Header';
import { Transactions } from '../components/Transactions/Transactions';
import { AuthContext } from '../contexts/AuthContext';

export const Main = () => {

  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Login/>
  }

  return (
    <React.Fragment>
      <Header/>
      <Card/>
      <Transactions/>
    </React.Fragment>
  )
}
