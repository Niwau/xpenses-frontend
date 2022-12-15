import styled from 'styled-components';

export const Card = styled.section`
  border-radius: 1rem;
  background: linear-gradient(90deg, #F756AA 0%, #F75672 100%);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  width: fit-content;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  min-width: 40rem;
`

export const Input = styled.input`
  background: none;
  outline: none;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  border:none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const Title = styled.h1`
  color: white;
  font-weight: 300;
  font-size: 2rem;
`

export const Section = styled.section`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`

export const Price = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: 600;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`