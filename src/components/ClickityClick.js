import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
    };
  }

  handleClick = () => {
    if(this.state.hasBeenClicked === false){
      this.setState({
        hasBeenClicked: true
      });
    }
    else{
      this.setState({
        hasBeenClicked: false
      })
    }
    console.log(this.state.hasBeenClicked)
    console.log(this.state.currentTheme)
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
      </div>
    );
  }
}

export default ClickityClick;
