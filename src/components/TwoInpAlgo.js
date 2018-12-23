import React, { Component } from 'react'
import { Div, Input, Button, Result, Back } from './custom-components'
import PropTypes from 'prop-types'

export default class TwoInpAlgo extends Component {
  static propType = {
    algorithm: PropTypes.func.isRequired,
    buttonTitle: PropTypes.string.isRequired,
  }

  state = {
    inpone: '',
    inptwo: '',
    result: '',
  }

  handleInponeChange = event => {
    const newVal = event.target.value
    this.setState({
      inpone: newVal,
    })
  }

  handleInptwoChange = event => {
    const newVal = event.target.value
    this.setState({
      inptwo: newVal,
    })
  }

  handleButtonClick = () => {
    const { inpone, inptwo } = this.state
    this.setState({
      result: this.props.algorithm(inpone, inptwo),
    })
  }

  render() {
    const { inpone, inptwo, result } = this.state
    return (
      <Div>
        <Back to="/"> {'<'} </Back>
        <label htmlFor="inpone">
          <Input
            type="text"
            id="inpone"
            value={inpone}
            onChange={this.handleInponeChange}
          />
        </label>

        <label htmlFor="inptwo">
          <Input
            type="text"
            id="inptwo"
            value={inptwo}
            onChange={this.handleInptwoChange}
          />
        </label>
        <Button onClick={() => this.handleButtonClick()}>
          {this.props.buttonTitle}
        </Button>
        <Result>{result}</Result>
      </Div>
    )
  }
}
