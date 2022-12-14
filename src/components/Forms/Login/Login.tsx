import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from '../../../services/api'
import * as S from '../../../styles/Form.styles'
import { loginSchema } from './login.schema';
import { LoginFormValues } from '../../../types/form-values.types';
import { toast } from 'react-toastify';
import { useCallback, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';


export const Login = () => {

  const { handleAuthentication } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginFormValues> = useCallback(
    async (data) => {
      try {
        const response = await api.post('/auth/login', data);
        console.log(response);
        localStorage.setItem('token', response.data.token);
        handleAuthentication(true);
      } catch (error: any) {
        toast.error(`${error.response.data.message}`);
      }
    }, []
  )

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Header>Login</S.Header>
      <S.Section>
        <S.Label>Email</S.Label>
        <S.Input {...register('email')}/>
        <S.Error>{formState.errors.email?.message}</S.Error>
      </S.Section>
      <S.Section>
        <S.Label>Password</S.Label>
        <S.Input type='password' {...register('password')}/>
        <S.Error>{formState.errors.password?.message}</S.Error>
      </S.Section>
      <S.Button>Sign in</S.Button>
      <S.Paragraph>Don't have an account? <S.Link to={'/signup'}>Sign up</S.Link></S.Paragraph>
    </S.Form>
  )
}
