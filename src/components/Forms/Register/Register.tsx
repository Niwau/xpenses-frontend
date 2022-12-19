import * as S from '../../../styles/Form.styles'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from './register.schema';
import { RegisterFormValues } from '../../../types/form-values.types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { api } from '../../../services/api';
import { useCallback } from 'react';

export const Register = () => {
  
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState } = useForm<RegisterFormValues>({ resolver: yupResolver(registerSchema) });

  const onSubmit: SubmitHandler<RegisterFormValues> = useCallback(
    async (data) => {
    
      try {
        await api.post('/auth/register', data);
        toast.success('Your account was created!');
        navigate('/signin');
      } catch (error: any) {
        toast.error(`${error.response.data.message}`);
      }
  
    }, []
  )
  
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Header>Sign up</S.Header>
      <S.Section>
        <S.Label htmlFor="name">Name</S.Label>
         <S.Input type="text" id="name" {...register('name')}/>
         <S.Error>{ formState.errors.name?.message }</S.Error>
       </S.Section>
      <S.Section>
        <S.Label htmlFor="email">Email</S.Label>
         <S.Input type="text" id="email" {...register('email')}/>
         <S.Error>{ formState.errors.email?.message }</S.Error>
       </S.Section>
       <S.Section>
         <S.Label htmlFor="password">Password</S.Label>
         <S.Input type="password" id="password" {...register('password')}/>
         <S.Error>{ formState.errors.password?.message }</S.Error>
      </S.Section>
      <S.Button>Create account</S.Button>
      <S.Paragraph>Already have an account? <S.Link to={'/'}>Log in</S.Link></S.Paragraph>
    </S.Form>
  )
}
