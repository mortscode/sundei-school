import React, { PropTypes } from 'react'

const Home = React.createClass({
  handleButtonClick() {
    firebase.database().ref('players/' + "asofdij").set({
      username: "mort",
      email: "mort@hotmale.com"
    });
  },
  render () {
    return (
      <button
        className="btn"
        onClick={this.handleButtonClick}
      >
        Click Here
      </button>
    )
  }
})

export default Home
