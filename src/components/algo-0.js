import React, { Component } from 'react'
import styled from 'styled-components'

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

function getLongestCommonSequence(s1, s2) {
  // console.table({ s1, s2, s1rest: s1.slice(1), s2rest: s2.slice(1) })
  if (s1.length && s2.length) return ''
  let i = s2.indexOf(s1[0])
  if (i === -1) return getLongestCommonSequence(s1.slice(1), s2)
  return s1[0] + getLongestCommonSequence(s1.slice(1), s2.slice(i + 1))
}

function getSequence(s1, s2) {
  const r1 = getLongestCommonSequence(s1, s2)
  const r2 = getLongestCommonSequence(s2, s1)
  console.table({ r1, r2 })
  return r1.length >= r2.length ? r1 : r2
}

export default class algo0 extends Component {
  state = {
    strone: 'aabaaab',
    strtwo: 'abcabcaab',
    commonSequence: 'NO COMMON SEQUENCE',
  }

  handleStrOneChange = event => {
    const newVal = event.target.value
    this.setState({
      strone: newVal,
    })
  }

  handleStrTwoChange = event => {
    const newVal = event.target.value
    this.setState({
      strtwo: newVal,
    })
  }

  handleClick = () => {
    const { strone, strtwo } = this.state
    this.setState({
      commonSequence: getSequence(strone, strtwo),
    })
  }

  render() {
    const { strone, strtwo, commonSequence } = this.state
    return (
      <Div>
        <label htmlFor="strone">
          <Input
            type="text"
            id="strone"
            value={strone}
            onChange={this.handleStrOneChange}
          />
        </label>

        <label htmlFor="strtwo">
          <Input
            type="text"
            id="strtwo"
            value={strtwo}
            onChange={this.handleStrTwoChange}
          />
        </label>
        <Button onClick={() => this.handleClick()}>
          Find Longest Subsequence
        </Button>
        <Result>{commonSequence}</Result>
      </Div>
    )
  }
}
