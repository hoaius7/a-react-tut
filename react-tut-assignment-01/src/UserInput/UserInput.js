import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    const style = {
        backgroundColor: 'blue',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
    };

    return (
        <div className='UserInput'>
            New Username: <input style={style} type="text" onChange={props.changed} value={props.username}/>
        </div>
    )
}

export default userInput;