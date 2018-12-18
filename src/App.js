/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import lis from './list'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Algorithm Try-out</h1>
        <Ul>
          {lis.map(e => (
            <li key={`${e.path}`}>
              <Link to={e.path}>{e.name}</Link>
            </li>
          ))}
        </Ul>
      </div>
    )
  }
}

export default App
