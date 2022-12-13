import * as S from './Register.styles'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

interface FormValues {
  name: string
  email: string
  password: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required()
})

const onSubmit: SubmitHandler<FormValues> = (data) => {
  console.log(data)
}

export const Register = () => {

  const { register, handleSubmit, formState } = useForm<FormValues>({ resolver: yupResolver(schema)});

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
      <S.Paragraph>Already have an account? <span>Log in</span></S.Paragraph>
    </S.Form>
  )
}
