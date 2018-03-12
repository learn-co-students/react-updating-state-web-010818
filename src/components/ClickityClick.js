import React from 'react';

export default class ClickityClick extends React.Component {

  state = {
    hasBeenClicked: false,
    theme: 'blue',
    addressInfo: {
      street: null,
      number: null,
      city: null,
      country: null
    },
  }

  handleClick = () => {
    this.setState({
      theme: 'rainbow',
      addressInfo: {
        ...this.state.addressInfo,
        city: 'NYC'
      }
    })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
        {console.log(this.state)}
      </div>
    );
  }

}
