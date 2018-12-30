import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Hoai', age: 28, id: '1' },
            { name: 'May', age: 29, id: '2' },
            { name: 'Anh', age: 2, id: '3' }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);

        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const persons = [...this.state.persons];
        const person = persons[personIndex];

        // const person = {...this.state.persons[personIndex]};
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        this.setState({
            persons: persons
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                key={person.id}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                                name={person.name}
                                age={person.age} />
                        })
                    }
                </div>
            );

            style.backgroundColor = 'red';
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    Toogle Persons
                </button>
                { persons }
            </div>
        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
