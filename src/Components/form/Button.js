import styled from 'styled-components'

const accentColor = 'red'

const Button = styled.button`
  align-items: center;
  background-color: ${(props) => (props.$primary ? accentColor : 'white')};
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: ${accentColor};
  color: ${(props) => (props.$primary ? 'white' : accentColor)};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  opacity: ${(props) => (props.disabled ? 'none' : 'auto')};
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.$primary ? 'blue' : 'green')};
  }
`

export default Button
