import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    textLength: 0,
    text: '',
    charArray: []
}

  changeTextHandler = (event) => {
    this.setState({
      textLength: event.target.value.length,
      text: event.target.value,
      charArray: event.target.value.split(' ')
    });
  }

  removeCharHandler = (index) => {
    const chars = [...this.state.charArray];
    chars.splice(index, 1);
    this.setState({
      charArray: chars,
      text: chars.join(' ')
    })
  }

  render() {
    const charArr = [...this.state.charArray];

    const chars = charArr.map((char, index) => {
      return <Char key={index} charValue={char} click={() => this.removeCharHandler(index)}/>
    });

    return (
        <div>
          <input type="text" onChange={(event) => this.changeTextHandler(event)} value={this.state.text}/>
          <Validation textLength={this.state.textLength}/>
          {chars}
        </div>
    );
  }
}

export default App;
