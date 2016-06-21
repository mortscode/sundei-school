import React, { PropTypes } from 'react'

const Main = React.createClass({
  render () {
    return (
      <div className="main">
        Hello from Main!
        {this.props.children}
      </div>
    )
  }
})

export default Main
