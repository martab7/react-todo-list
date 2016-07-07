import React, { Component } from 'react'
import ShowText from './ShowText'

class TextDisplay extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'something'
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="This is a placeholder"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <ShowText text={this.state.inputText}/>
      </div>
    )
  }
}

export default TextDisplay
