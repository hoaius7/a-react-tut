import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    usernames: [
      { username: 'hoaiducnew' },
      { username: 'hoaius7' },
      { username: 'hoaius8' }
    ]
  };

  changeUsernameHandler = (event) => {
    this.setState({
      usernames: [
        { username: event.target.value },
        { username: 'hoaius7' },
        { username: 'hoaius8' }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[0].username} />
        <UserOutput username={this.state.usernames[1].username} />
        <UserOutput username={this.state.usernames[2].username} />
      </div>
    );
  }
}

export default App;
