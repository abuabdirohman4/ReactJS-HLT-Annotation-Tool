import React from 'react'

class Morph extends React.Component {
  constructor(props) {
    super(props)
    this.value = props.value
    this.toggleHover = this.toggleHover.bind(this)
  }

  state = {
    isHover: false,
    // isClicking: false,
  }

  toggleHover = function toggleHover() {
    const { isHover } = this.state

    this.setState({
      isHover: !isHover,
    })
  }

  render() {
    const { isHover } = this.state
    if (isHover) {
      this.morphStyle = { color: 'red' }
    } else {
      this.morphStyle = { color: 'black' }
    }
    return (
      <span style={this.morphStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {this.value}
      </span>
    )
  }
}

export default Morph
