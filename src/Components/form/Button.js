import styled from 'styled-components'

const accentColor = '#ff343f'

const Button = styled.button`
  text-align: center;
  background: ${(props) => (props.$primary ? 'white' : accentColor)};
  border-radius: 30px;

  color: ${(props) => (props.$primary ? accentColor : 'white')};
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  min-height: 36px;
  min-width: 100px;
  outline-style: none;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
  text-decoration: none;
  transition: all 0.3s ease-out 0s;
  border: 0;

  &:hover {
    box-shadow: rgb(255, 52, 63) 2px 2px 20px 0px;
    transition: all 0.3s ease-in 0s;
  }
`

export default Button
