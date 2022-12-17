import styled from 'styled-components';

interface PriceProps {
  type: 'EXPENSE' | 'INCOME'
}

export const Price = styled.h3<PriceProps>`
  align-items: center;
  align-self: flex-start;
  gap: 0.1rem;
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  ${ ({ type }) => type == 'EXPENSE' ? 
    'color: var(--red);' : 
    'color: var(--green);'
  };

`;

export const Aside = styled.aside`
  display: flex;
  gap: 1rem;
`

export const Wrapper = styled.section`
  border: 1px solid var(--light-gray);
  border-radius: 0.5rem;
  display: flex;
  padding: 1rem 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.img`
  width: 5rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Name = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--black);
`

export const Category = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--gray);
`