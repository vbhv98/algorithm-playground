import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  text-decoration: none;
  color: #3df;
  background: whitesmoke;
  border: 2px solid currentColor;
  padding: 0.5em 3em;
  border-radius: 1em;
  width: 100%;
  text-align: center;
`

const Result = styled.div`
  font-size: 16px;
  text-align: center;
  font-family: 'code new roman';
  padding: 2em 5em;
  color: #0fa;
  border: 2px solid currentColor;
  border-radius: 0.5em;
  width: 100%;
  text-align: center;
  display: grid;
  place-items: center;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 30%;
  margin: 0 auto;

  & > * {
    width: 100%;
  }
`

const Input = styled.input`
  width: 100%;
  color: #f04;
  border: 2px solid currentColor;
  border-radius: 1em;
  padding: 1em 2em;
  text-align: center;
`

const Back = styled(Link)`
  text-decoration: none;
  color: #61dafb;
  padding: 1em 3em;
  position: fixed;
  left: 2em;
  top: 2em;
  width: auto;

  &::after {
    content: 'Back';
  }
`

export { Div, Input, Result, Button, Back }
