/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import lis from './list'

const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 80vw;
`

class App extends Component {
  render() {
    return (
      <center>
        <h1 style={{ padding: '1em 3em' }}>Algorithm Try-out</h1>
        <Ul>
          {lis.map(e => (
            <li key={`${e.path}`}>
              <Link to={e.path}>{e.name}</Link>
            </li>
          ))}
        </Ul>
      </center>
    )
  }
}

export default App
