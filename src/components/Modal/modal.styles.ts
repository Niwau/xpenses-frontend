import styled, { keyframes} from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(0,0,0,0.07);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Section = styled.section`
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const IconGroup = styled.footer`
  display: flex;
  gap: 0.5rem;
`

export const Button = styled.button`
  background: none;
  border: 1px solid var(--pink);
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: var(--pink);
  cursor: pointer;
`

export const RadioLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
`

export const Radio = styled.input.attrs({
  type: 'radio'
})`
`

export const Title = styled.h1`
  font-weight: 600;
  margin-right: auto;
`