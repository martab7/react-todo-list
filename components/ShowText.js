import React, { Component } from 'react'

class ShowText extends Component {

  render() {
    return <div>I'm displaying text from my parent: {this.props.text} </div>
  }
}

export default ShowText
