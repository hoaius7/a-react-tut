import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: ''
}

  changeTextHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  removeCharHandler = (index) => {
    const chars = this.state.text.split('');
    chars.splice(index, 1);
    this.setState({
      text: chars.join('')
    })
  }

  render() {
    const chars = this.state.text.split('').map((char, index) => {
      return <Char key={index} character={char} click={() => this.removeCharHandler(index)}/>
    });

    return (
        <div>
          <input type="text" onChange={(event) => this.changeTextHandler(event)} value={this.state.text}/>
          <p>{this.state.text}</p>
          <Validation textLength={this.state.text.length}/>
          {chars}
        </div>
    );
  }
}

export default App;
