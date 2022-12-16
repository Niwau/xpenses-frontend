import styled from 'styled-components';
import { Link as Anchor } from 'react-router-dom';

export const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  outline: 1px solid var(--light-gray);
  width: fit-content;
  border-radius: 0.5rem;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: min-width;
`

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
`

export const Input = styled.input`
  border: 1px solid var(--light-gray);
  outline: none;
  padding: 1rem;
  width: 35rem;
  background: white;
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  border-radius: 0.5rem;
`

export const Header = styled.h2`
  font-size: 2rem;
`

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--pink);
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.5rem;
`

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: var(--black);
  font-weight: 500;
`

export const Error = styled.p`
  color: red;
  font-size: 1.5rem;
`

export const Link = styled(Anchor)`
  color: var(--pink);
  text-decoration: none;
`