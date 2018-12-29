import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Hoai', age: 28 },
            { name: 'May', age: 29 },
            { name: 'Anh', age: 2 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // DON'T DO THIS: this.state.persons[0].name = 'Duc';
        this.setState({
            persons: [
                { name: newName, age: 35 },
                { name: 'Mai', age: 36 },
                { name: 'Xuka', age: 6 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Hoai', age: 35 },
                { name: event.target.value, age: 36 },
                { name: 'Xuka', age: 6 }
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    Toogle Persons
                </button>
                {
                    this.state.showPersons ?
                        <div>
                            <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age}/>
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Hi')}
                                changed={this.nameChangedHandler}>
                                My Hobbies: Racing
                            </Person>
                            <Person
                                name={this.state.persons[2].name}
                                age={this.state.persons[2].age}/>
                        </div>
                        : null
                }
            </div>
        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
